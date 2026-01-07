import FileRow from "./FileTable/FileRow";
import FileTableHeader from "./FileTable/FileTableHeader";

export default function FileTable({ files, onSelectFile }) {
  return (
    <>
      {/* Desktop / Tablet Table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-sm min-w-[700px]">
          <FileTableHeader />
          <tbody>
            {files.map((file) => (
              <FileRow
                key={file.id}
                file={file}
                onClick={() => onSelectFile(file)}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="sm:hidden space-y-3">
        {files.map((file) => (
          <div
            key={file.id}
            onClick={() => onSelectFile(file)}
            className="bg-white border rounded-xl p-4 space-y-2 cursor-pointer"
          >
            <div className="font-medium text-gray-800">
              {file.name}
            </div>

            <div className="flex justify-between text-sm text-gray-500">
              <span>{file.modified}</span>
              <span>{file.size}</span>
            </div>

            <div className="text-xs">
              Status:{" "}
              <span className="font-medium capitalize">
                {file.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
