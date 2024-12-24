"use client";
import Link from "next/link";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Renders the Error component.
 * This component is displayed when an error occurs in the application.
 * It shows an error message and provides options to retry or return home.
 */
export default function Error({ error, reset }: Props) {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto h-12 w-12 text-primary" />

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Something went wrong!
        </h1>

        <p className="mt-4 text-gray-500 dark:text-gray-400">
          We apologize for the inconvenience. You can try again or return to the
          homepage.
          {error.digest && (
            <span className="block mt-2 text-sm">Error ID: {error.digest}</span>
          )}
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="rounded-full px-6 py-2 text-gray-900 dark:text-white border border-gray-900 dark:border-white hover:text-white hover:bg-gray-900 dark:hover:bg-white dark:hover:text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:ring-offset-2"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="rounded-full px-6 py-2 text-gray-900 dark:text-white border border-gray-900 dark:border-white hover:text-white hover:bg-gray-900 dark:hover:bg-white dark:hover:text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:ring-offset-2"
            prefetch={false}
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
