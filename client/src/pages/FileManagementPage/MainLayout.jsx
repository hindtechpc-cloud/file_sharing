import FileDetailPanel from "./MainLayout/FileDetailPanel";
import FileListPanel from "./MainLayout/FileListPanel";

export default function MainLayout({ selectedFile, onSelectFile }) {
  return (
    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-12
        gap-4
        lg:gap-6
      "
    >
      {/* File List */}
      <div
        className="
          col-span-1
          lg:col-span-8
          order-1
        "
      >
        <FileListPanel onSelectFile={onSelectFile} />
      </div>

      {/* File Detail */}
      {selectedFile && (
        <div
          className="
            col-span-1
            lg:col-span-4
            order-2
          "
        >
          <FileDetailPanel file={selectedFile} />
        </div>
      )}
    </div>
  );
}
