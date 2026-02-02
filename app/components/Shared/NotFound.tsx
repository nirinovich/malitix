export function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-var(--navbar-height)-var(--footer-height))] px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-[var(--text-primary)] mb-4">
          404
        </h1>
        <p className="text-2xl font-semibold text-[var(--text-secondary)] mb-4">
          Page Not Found
        </p>
        <p className="text-[var(--text-tertiary)] mb-8 max-w-md">
          The page you're looking for doesn't exist. It might have been moved or
          deleted.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
