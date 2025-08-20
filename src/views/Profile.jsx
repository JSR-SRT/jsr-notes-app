// หน้า Profile
import { useEffect, useState } from "react";
import { dummyNotes } from "../data/data";
import { Link } from "react-router-dom";

export const Profile = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(localStorage.getItem("userEmail") || "user@example.com");
  }, []);

  const publicNotes = dummyNotes.filter((n) => !n.isPinned);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold">
          JSR's Public Profile
        </h2>
        <p className="text-sm text-gray-600 mt-1">Email: {email}</p>
      </div>

      <div className="bg-white border rounded-xl p-5 shadow-sm space-y-3">
        <h3 className="text-base font-semibold">Ask a Question About Notes</h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Ask a question about the notes..."
            className="flex-1 rounded-lg border px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <button className="px-5 py-2 rounded-lg bg-gray-900 text-white hover:bg-black">
            Ask
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Public Notes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publicNotes.map((n) => (
            <div
              key={n.id}
              className="bg-white border rounded-xl p-4 shadow-sm"
            >
              <h4 className="font-semibold">{n.title}</h4>
              <p className="text-sm text-gray-600 line-clamp-3">{n.content}</p>
              <div className="mt-2 flex justify-end">
                <Link to={`/note/${n.id}`} className="text-sm hover:underline">
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
