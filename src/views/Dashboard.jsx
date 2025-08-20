import { useEffect, useMemo, useState } from "react";
import { dummyNotes as seed } from "../data/data";
import { CreateNoteModal } from "../components/CreateNoteModal";
import { Search, PlusCircle, Pin } from "lucide-react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const [notes, setNotes] = useState(seed);
  const [query, setQuery] = useState("");
  const [openCreate, setOpenCreate] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    setUserEmail(localStorage.getItem("userEmail") || "User");
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return notes;
    return notes.filter(
      (n) =>
        n.title.toLowerCase().includes(q) ||
        n.content.toLowerCase().includes(q) ||
        n.tags.join(" ").toLowerCase().includes(q)
    );
  }, [notes, query]);

  const pinned = filtered.filter((n) => n.isPinned);
  const others = filtered.filter((n) => !n.isPinned);

  const handleCreateNote = (newNote) => {
    setNotes((prev) => [newNote, ...prev]);
  };

  const NoteCard = ({ note }) => (
    <div className="bg-white border rounded-xl shadow-sm p-4 flex flex-col justify-between h-56 relative">
      {note.isPinned && (
        <span className="absolute top-2 right-2 text-gray-500">
          <Pin size={18} />
        </span>
      )}
      <h3 className="text-base font-semibold mb-1">{note.title}</h3>
      <p className="text-sm text-gray-600 flex-1 line-clamp-3">
        {note.content}
      </p>
      <div className="flex flex-wrap gap-2 my-2">
        {note.tags.map((t, i) => (
          <span
            key={i}
            className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="text-xs text-gray-500 flex justify-between items-center">
        <span>Created on: 6/21/2023</span>
        <Link to={`/note/${note.id}`} className="hover:underline">
          Details
        </Link>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold">
        Welcome, {userEmail} 👋
      </h2>

      {/* Search bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex items-center bg-white border rounded-xl shadow-sm px-3 py-2 w-full sm:flex-1">
          <Search className="mr-2 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search notes by title, content, or tags"
            className="w-full focus:outline-none"
          />
        </div>
        <button
          className="px-5 py-2 rounded-xl bg-gray-900 text-white hover:bg-neutral-700"
          onClick={() => {}}
        >
          Search
        </button>
      </div>

      {/* Create Note button */}
      <button
        onClick={() => setOpenCreate(true)}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gray-900 text-white hover:bg-neutral-700"
      >
        <PlusCircle size={18} /> Create Note
      </button>

      {/* Pinned */}
      {pinned.length > 0 && (
        <>
          <h3 className="text-lg font-semibold">Pinned</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pinned.map((n) => (
              <NoteCard key={n.id} note={n} />
            ))}
          </div>
        </>
      )}

      {/* Others */}
      <h3 className="text-lg font-semibold">All Notes</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {others.map((n) => (
          <NoteCard key={n.id} note={n} />
        ))}
      </div>

      {/* Modal */}
      <CreateNoteModal
        open={openCreate}
        onClose={() => setOpenCreate(false)}
        onCreate={handleCreateNote}
      />
    </div>
  );
};
