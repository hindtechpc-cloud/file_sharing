export default function FileTableHeader() {
  return (
    <thead className="bg-gray-50 text-gray-500">
      <tr>
        <th className="px-6 py-3 text-left">FILE NAME</th>
        <th className="px-6 py-3 text-left">LAST MODIFIED</th>
        <th className="px-6 py-3 text-left">FILE SIZE</th>
        <th className="px-6 py-3 text-left">STATUS</th>
        <th className="px-6 py-3 text-right"></th>
      </tr>
    </thead>
  );
}
