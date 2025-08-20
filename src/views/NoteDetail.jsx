import { useParams, useNavigate } from "react-router-dom";
import { dummyNotes } from "../data/data";
import { Pin } from "lucide-react";

export const NoteDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = dummyNotes.find((n) => n.id === id);

  if (!note) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <h2 className="text-xl font-semibold">Note not found.</h2>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl sm:text-4xl font-bold">{note.title}</h2>
      <p className="text-base sm:text-lg leading-relaxed text-gray-800 whitespace-pre-wrap">
        {note.content}
      </p>

      <div className="flex flex-wrap gap-2">
        {note.tags.map((t, i) => (
          <span
            key={i}
            className="text-sm bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      {note.isPinned && (
        <div className="inline-flex items-center gap-2 text-gray-600">
          <Pin size={18} /> Pinned
        </div>
      )}

      <div className="flex gap-3 pt-2">
        <button className="px-4 py-2 rounded-lg border hover:bg-gray-100">
          Edit Note
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};
