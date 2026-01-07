import { useState } from "react";
import { recentFiles } from "../data/recentFiles";
import RecentFilesHeader from "./recent-files/RecentFilesHeader";
import RecentFilesTable from "./recent-files/RecentFilesTable";


export default function RecentFiles() {
  const [files, setFiles] = useState(recentFiles);

  const handleDelete = (id) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <RecentFilesHeader />
      <RecentFilesTable files={files} onDelete={handleDelete} />
    </div>
  );
}
