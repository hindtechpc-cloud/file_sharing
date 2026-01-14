import AISummary from "./FileDetailPanel/AISummary";
import FileActions from "./FileDetailPanel/FileActions";
import FileInfo from "./FileDetailPanel/FileInfo";
import FilePreview from "./FileDetailPanel/FilePreview";
import SecurityScan from "./FileDetailPanel/SecurityScan";

export default function FileDetailPanel({ file }) {
  return (
    <div className="space-y-4">
      <div className="bg-white shadow-2xl p-3 rounded-md border border-gray-200 flex flex-col gap-3">
        Name:{file.file.slice(10, file.file.length)}
        <FilePreview />
        <FileInfo file={file} />
        <FileActions />
      </div>
      <AISummary />
      <SecurityScan />
    </div>
  );
}
