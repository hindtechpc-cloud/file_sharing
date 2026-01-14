import { useState } from "react";
import UploadButton from "./UploadButton";
import UploadIcon from "./UploadIcon";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../context/Authcontext";
import { FileContext } from "../../../context/FileContext";
const MAX_SIZE = 25 * 1024 * 1024;
const ALLOWED_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
];

export default function UploadCard() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const { files, setFiles } = useContext(FileContext);

  const { user,loadFiles } = useContext(AuthContext);

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/file/upload-file",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setFiles([...files, res?.data?.doc]);
      loadFiles()
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const validateFile = (file) => {
    if (file.size > MAX_SIZE) {
      return "File size must be less than 25MB";
    }
    if (!ALLOWED_TYPES.includes(file.type)) {
      return "Only PDF, DOCX, and TXT files are allowed";
    }
    return "";
  };

  const handleFile = (file) => {
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setFile(file);
    uploadFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) handleFile(droppedFile);
    uploadFile(file);
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="
        w-full
        max-w-3xl
        mx-auto
        border-2
        border-dashed
        border-gray-300
        rounded-xl
        flex
        flex-col
        items-center
        text-center
        transition
        hover:border-gray-400

        /* Responsive padding */
        p-4
        sm:p-6
        md:p-8
        lg:p-10
      "
    >
      {/* Icon */}
      <div className="flex items-center justify-center">
        <UploadIcon />
      </div>

      {/* Title */}
      <h3
        className="
          mt-3
          sm:mt-4
          font-medium
          text-gray-800
          text-sm
          sm:text-base
        "
      >
        Drag & Drop Files Here
      </h3>

      {/* Subtitle */}
      <p
        className="
          mt-1
          text-xs
          sm:text-sm
          text-gray-500
          max-w-md
        "
      >
        Accepted file types: PDF, DOCX, TXT. Max size: 25MB
      </p>

      {/* Upload Button */}
      <div className="mt-4 sm:mt-5">
        <UploadButton onFileSelect={handleFile} />
      </div>

      {/* Success */}
      {file && (
        <p
          className="
            mt-4
            text-xs
            sm:text-sm
            text-green-600
            break-all
          "
        >
          Selected: {file.name}
        </p>
      )}

      {/* Error */}
      {error && (
        <p
          className="
            mt-4
            text-xs
            sm:text-sm
            text-red-500
            text-center
          "
        >
          {error}
        </p>
      )}
    </div>
  );
}
