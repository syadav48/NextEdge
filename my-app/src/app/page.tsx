import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 space-y-8">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
          Welcome Home
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/blog"
            className="group p-6 rounded-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-md bg-white"
          >
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
              Blog →
            </h2>
            <p className="mt-2 text-gray-500">Explore our latest articles</p>
          </Link>

          <Link
            href="/products"
            className="group p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-md bg-white"
          >
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
              Products →
            </h2>
            <p className="mt-2 text-gray-500">Discover amazing products</p>
          </Link>

          <Link
            href="/articles/breaking-news-123?lang=en"
            className="group p-6 rounded-lg border border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-md bg-white"
          >
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
              English Article →
            </h2>
            <p className="mt-2 text-gray-500">Read in English</p>
          </Link>

          <Link
            href="/articles/breaking-news-123?lang=fr"
            className="group p-6 rounded-lg border border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-md bg-white"
          >
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
              French Article →
            </h2>
            <p className="mt-2 text-gray-500">Lire en français</p>
          </Link>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500">
            Get started by exploring our content
          </p>
        </div>
      </div>
    </div>
  );
}