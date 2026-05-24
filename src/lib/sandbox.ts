export interface SandboxRunResult {
  output: string;
  timedOut: boolean;
  errored: boolean;
  durationMs: number;
}

const DEFAULT_TIMEOUT_MS = 3000;

interface SandboxMessage {
  nonce: string;
  kind: 'log' | 'error' | 'done';
  payload: string;
}

function isSandboxMessage(value: unknown): value is SandboxMessage {
  if (typeof value !== 'object' || value === null) return false;
  const v = value as Record<string, unknown>;
  return typeof v.nonce === 'string' && typeof v.kind === 'string' && typeof v.payload === 'string';
}

export function runJsInSandbox(code: string, timeoutMs = DEFAULT_TIMEOUT_MS): Promise<SandboxRunResult> {
  return new Promise((resolve) => {
    const nonce =
      typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID()
        : `n-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const start = performance.now();
    let outputLines: string[] = [];
    let errored = false;
    let finished = false;

    const iframe = document.createElement('iframe');
    iframe.setAttribute('sandbox', 'allow-scripts');
    iframe.setAttribute('aria-hidden', 'true');
    iframe.style.position = 'fixed';
    iframe.style.left = '-9999px';
    iframe.style.top = '-9999px';
    iframe.style.width = '1px';
    iframe.style.height = '1px';
    iframe.style.opacity = '0';
    iframe.style.pointerEvents = 'none';

    const finish = (timedOut: boolean) => {
      if (finished) return;
      finished = true;
      window.removeEventListener('message', onMessage);
      window.clearTimeout(timer);
      if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
      resolve({
        output: outputLines.join('\n'),
        timedOut,
        errored: errored || timedOut,
        durationMs: Math.round(performance.now() - start),
      });
    };

    const onMessage = (e: MessageEvent) => {
      if (!isSandboxMessage(e.data) || e.data.nonce !== nonce) return;
      if (e.data.kind === 'log') {
        outputLines.push(e.data.payload);
      } else if (e.data.kind === 'error') {
        outputLines.push(`[error] ${e.data.payload}`);
        errored = true;
      } else if (e.data.kind === 'done') {
        finish(false);
      }
    };
    window.addEventListener('message', onMessage);

    const timer = window.setTimeout(() => {
      if (finished) return;
      outputLines.push(`[timed out after ${timeoutMs}ms]`);
      errored = true;
      finish(true);
    }, timeoutMs);

    const html = `<!doctype html><html><body><script>
(function(){
  var nonce = ${JSON.stringify(nonce)};
  function send(kind, payload){
    try { parent.postMessage({ nonce: nonce, kind: kind, payload: String(payload) }, '*'); } catch (_) {}
  }
  function fmt(v){
    try {
      if (typeof v === 'string') return v;
      if (v instanceof Error) return v.stack || (v.name + ': ' + v.message);
      if (typeof v === 'function') return '[Function]';
      if (typeof v === 'undefined') return 'undefined';
      if (typeof v === 'object') return JSON.stringify(v);
      return String(v);
    } catch (_) { return String(v); }
  }
  ['log','info','warn','error','debug'].forEach(function(method){
    console[method] = function(){
      var parts = [];
      for (var i = 0; i < arguments.length; i++) parts.push(fmt(arguments[i]));
      send('log', parts.join(' '));
    };
  });
  window.addEventListener('error', function(e){ send('error', e.message || String(e.error || e)); });
  window.addEventListener('unhandledrejection', function(e){ send('error', String(e.reason)); });
  try {
${code}
  } catch (e) {
    send('error', (e && (e.stack || e.message)) || String(e));
  } finally {
    send('done', '');
  }
})();
</script></body></html>`;

    iframe.srcdoc = html;
    document.body.appendChild(iframe);
  });
}
