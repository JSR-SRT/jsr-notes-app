import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("arm.js@example.com");
  const [password, setPassword] = useState("********");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="bg-white border rounded-2xl shadow-sm w-full max-w-md p-6 sm:p-8">
        <h2 className="text-xl font-bold text-center mb-6">
          Login to Your Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              className="w-full rounded-lg border px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full rounded-lg border px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-gray-900 text-white py-2.5 font-semibold hover:bg-neutral-700"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="underline hover:text-black">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
