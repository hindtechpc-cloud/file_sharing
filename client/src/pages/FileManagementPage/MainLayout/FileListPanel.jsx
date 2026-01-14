import { useContext } from "react";
import FileTable from "./FileListPanel/FileTable";
import { FileContext } from "../../../context/FileContext";
import { useEffect } from "react";

export default function FileListPanel({ onSelectFile }) {
  const files2 = [
    {
      name: "Project_Alpha_Brief.docx",
      modified: "Oct 26, 2023",
      size: "1.2 MB",
      clean: true,
      summarized: true,
    },
    {
      name: "Q3_Financials.pdf",
      modified: "Oct 25, 2023",
      size: "4.5 MB",
      clean: true,
    },
  ];

  const { files, loadFiles } = useContext(FileContext);
  useEffect(() => {
    loadFiles();
  }, []);
  console.log(files);

  return (
    <div className="bg-white rounded border border-gray-300">
      <FileTable files={files} onSelectFile={onSelectFile} />
    </div>
  );
}
