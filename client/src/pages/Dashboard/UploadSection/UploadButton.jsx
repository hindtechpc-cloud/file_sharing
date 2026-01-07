import { useRef } from "react";

const MAX_SIZE = 25 * 1024 * 1024; // 25MB
const ALLOWED_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
];

export default function UploadButton({ onFileSelect }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Size validation
    if (file.size > MAX_SIZE) {
      alert("File size must be less than 25MB");
      return;
    }

    // Type validation
    if (!ALLOWED_TYPES.includes(file.type)) {
      alert("Only PDF, DOCX, and TXT files are allowed");
      return;
    }

    onFileSelect?.(file);
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept=".pdf,.docx,.txt"
        onChange={handleFileChange}
      />

      <button
        type="button"
        onClick={() => fileInputRef.current.click()}
        className="mt-6 px-5 py-2 text-sm rounded-lg bg-black text-white hover:bg-gray-800 transition"
      >
        Upload New File
      </button>
    </>
  );
}
