export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-slate-900 dark:text-white mb-4">
          404
        </h1>
        <p className="text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4">
          Page Not Found
        </p>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
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
