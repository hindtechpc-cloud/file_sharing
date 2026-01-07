import FileTable from "./FileSection/FileTable";

export default function FileSection() {
  return (
    <>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        My Files
      </h2>
      <FileTable />
    </>
  );
}
