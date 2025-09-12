import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Welcome to JSR Notes</h2>
      <p className="max-w-2xl text-gray-600 mb-8 px-4">
        AI-powered note-taking for developers. Organize your thoughts, generate content, and share your knowledge.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link to="/login" className="px-6 py-3 rounded-xl bg-gray-900 text-white hover:bg-neutral-700">
          Get Started
        </Link>
        <Link to="/signup" className="px-6 py-3 rounded-xl border border-gray-900 text-gray-900 hover:bg-stone-200">
          Create Account
        </Link>
      </div>
    </div>
  );
};