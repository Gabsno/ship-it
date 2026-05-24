import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
  info: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null, info: null };

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('[ship-it] ErrorBoundary caught', error, info);
    this.setState({ error, info });
  }

  reset = (): void => {
    this.setState({ error: null, info: null });
  };

  clearProgress = (): void => {
    try {
      window.localStorage.removeItem('ship-it:progress:v1');
      window.localStorage.removeItem('ship-it:whats-new:lastSeen');
    } catch {
      // ignore
    }
    window.location.reload();
  };

  render(): ReactNode {
    if (!this.state.error) return this.props.children;
    const { error, info } = this.state;
    return (
      <div className="min-h-screen p-6 text-ink-100">
        <div className="max-w-3xl mx-auto card p-6 space-y-4 border-danger/40">
          <div>
            <h1 className="text-xl font-semibold text-danger">Something broke</h1>
            <p className="text-sm text-ink-300 mt-1">
              The app caught an error during render. Details below.
            </p>
          </div>
          <pre className="bg-ink-900 border border-ink-700 rounded-lg p-3 text-xs font-mono text-ink-100 whitespace-pre-wrap overflow-x-auto">
            {error.name}: {error.message}
            {error.stack ? `\n\n${error.stack}` : ''}
          </pre>
          {info?.componentStack && (
            <details className="text-xs text-ink-300">
              <summary className="cursor-pointer text-ink-200">Component stack</summary>
              <pre className="mt-2 bg-ink-900 border border-ink-700 rounded-lg p-3 font-mono whitespace-pre-wrap overflow-x-auto">
                {info.componentStack}
              </pre>
            </details>
          )}
          <div className="flex gap-2 flex-wrap">
            <button type="button" className="btn-primary" onClick={this.reset}>
              Try again
            </button>
            <button type="button" className="btn-ghost" onClick={() => window.location.reload()}>
              Reload page
            </button>
            <button type="button" className="btn-danger" onClick={this.clearProgress}>
              Reset progress + reload
            </button>
          </div>
        </div>
      </div>
    );
  }
}
