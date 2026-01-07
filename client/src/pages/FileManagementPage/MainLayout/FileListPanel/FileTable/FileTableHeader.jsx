export default function FileTableHeader() {
  return (
    <thead className="bg-gray-50 text-gray-500">
      <tr>
        <th className="px-4 py-3 text-left">Name</th>
        <th className="px-3">Date Modified</th>
        <th className="px-3">Size</th>
        <th className="px-3">Status</th>
      </tr>
    </thead>
  );
}
