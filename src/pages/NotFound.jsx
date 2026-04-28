import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-background">
      <div className="max-w-md text-center">
        <h1 className="font-bold text-7xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
