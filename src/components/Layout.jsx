// Navbar จะแสดงเมนูต่างกันตามหน้า:
// - ถ้าอยู่ /login หรือ /signup -> แสดงเมนู Login/Signup
// - อื่นๆ (เช่น /, /dashboard, /profile, /note/:id) -> แสดง Home, Dashboard, Profile, Email, Logout

import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { NotebookText, Home, User, LogIn, LogOut } from "lucide-react";
import { useEffect, useState } from "react";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("userEmail") || "";
    setUserEmail(email);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("userEmail");
    setUserEmail("");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-gray-900">
      <nav className="w-full sticky top-0 z-10 border-b bg-stone-200 backdrop-blur px-4 sm:px-6 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold">
            <NotebookText size={20} className="text-gray-900" />
            <span>JSR Notes</span>
          </Link>

          {/* เมนูบน Auth pages */}
          {isAuthPage ? (
            <ul className="flex items-center gap-4 text-sm">
              <li>
                <Link
                  to="/login"
                  className="hover:text-black flex items-center gap-1"
                >
                  <LogIn size={16} /> Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-black">
                  Signup
                </Link>
              </li>
            </ul>
          ) : (
            // เมนูบนหน้าอื่นๆ
            <ul className="flex items-center gap-4 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-black flex items-center gap-1"
                >
                  <Home size={16} /> Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-black">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="hover:text-black flex items-center gap-1"
                >
                  <User size={16} /> Profile
                </Link>
              </li>
              {userEmail && (
                <li className="hidden sm:block text-gray-500">{userEmail}</li>
              )}
              <li>
                <button
                  onClick={handleLogout}
                  className="hover:text-black flex items-center gap-1"
                >
                  <LogOut size={16} /> Logout
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
