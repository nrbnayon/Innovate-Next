import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link href="/">
        <a className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">
          Go to Home
        </a>
      </Link>
    </div>
  );
};

export default NotFoundPage;
