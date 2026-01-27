import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-8xl font-bold text-primary-600 mb-4">404</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. 
          It might have been moved or doesn&apos;t exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-colors shadow-md"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors"
          >
            <Search className="w-5 h-5" />
            Browse Services
          </Link>
        </div>
      </div>
    </div>
  );
}
