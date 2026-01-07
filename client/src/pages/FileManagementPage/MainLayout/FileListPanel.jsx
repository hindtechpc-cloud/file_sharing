import FileTable from "./FileListPanel/FileTable";

export default function FileListPanel({ onSelectFile }) {
  const files = [
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

  return (
    <div className="bg-white rounded border border-gray-300">
      <FileTable files={files} onSelectFile={onSelectFile} />
    </div>
  );
}

