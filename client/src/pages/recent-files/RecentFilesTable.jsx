import RecentFileRow from "./RecentFileRow";

export default function RecentFilesTable({ files, onDelete }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      
      {/* Desktop / Tablet Table */}
      <div className="hidden md:block">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="px-6 py-3 text-left">File</th>
              <th className="px-4 py-3 text-left">Last Modified</th>
              <th className="px-4 py-3 text-left">Size</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {files.map((file) => (
              <RecentFileRow
                key={file.id}
                file={file}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden divide-y">
        {files.map((file) => (
          <MobileRecentFileCard
            key={file.id}
            file={file}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}


function MobileRecentFileCard({ file, onDelete }) {
  return (
    <div className="p-4 flex flex-col gap-2">
      {/* File Name */}
      <div className="font-medium text-gray-900 text-sm break-all">
        {file.name}
      </div>

      {/* Meta Info */}
      <div className="flex justify-between text-xs text-gray-500">
        <span>{file.modified}</span>
        <span>{file.size}</span>
      </div>

      {/* Status + Actions */}
      <div className="flex items-center justify-between mt-1">
        <span
          className={`px-2 py-0.5 rounded-full text-xs font-medium
            ${file.status === "Clean" && "bg-green-100 text-green-700"}
            ${file.status === "Draft" && "bg-gray-100 text-gray-700"}
            ${file.status === "Summarized" && "bg-purple-100 text-purple-700"}
          `}
        >
          {file.status}
        </span>

        <button
          onClick={() => onDelete(file.id)}
          className="text-red-500 text-xs font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
