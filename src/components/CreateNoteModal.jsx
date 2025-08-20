// Modal สำหรับสร้างโน้ต (UI อย่างเดียว ยังไม่เชื่อม backend)

import { X } from "lucide-react";
import { useState } from "react";

export const CreateNoteModal = ({ open, onClose, onCreate }) => {
  if (!open) return null;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [isPinned, setIsPinned] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({
      id: Date.now().toString(),
      title,
      content,
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      isPinned,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Create a New Note</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900"
          >
            <X size={18} />
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-1">Title</label>
            <input
              className="w-full rounded-md border px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Content</label>
            <textarea
              className="w-full h-28 rounded-md border px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Tags</label>
            <input
              placeholder="Enter tags separated by commas"
              className="w-full rounded-md border px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>

          <label className="inline-flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={isPinned}
              onChange={(e) => setIsPinned(e.target.checked)}
              className="rounded"
            />
            Pin this note
          </label>

          <button
            type="submit"
            className="w-full rounded-md bg-gray-900 text-white font-semibold py-2 hover:bg-black"
          >
            Create Note
          </button>
        </form>
      </div>
    </div>
  );
};
