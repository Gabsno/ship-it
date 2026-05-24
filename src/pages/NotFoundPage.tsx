import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="card p-6 text-center">
      <h1 className="text-2xl font-semibold text-ink-100">404</h1>
      <p className="text-ink-300 mt-1">That route doesn't exist yet.</p>
      <Link to="/" className="btn-primary mt-4 inline-flex">Back home</Link>
    </div>
  );
}
