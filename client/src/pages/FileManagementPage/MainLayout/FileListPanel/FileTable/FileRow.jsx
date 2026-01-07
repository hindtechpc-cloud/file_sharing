import FileMeta from "./FileRow/FileMeta";
import FileName from "./FileRow/FileName";
import FileStatusIcons from "./FileRow/FileStatusIcons";

export default function FileRow({ file, onClick }) {
  return (
    <tr
      onClick={onClick}
      className="border-t border-gray-200 hover:bg-blue-50 cursor-pointer"
    >
      <td className="px-4 py-3">
        <FileName name={file.name} />
      </td>
      <td><FileMeta value={file.modified} /></td>
      <td><FileMeta value={file.size} /></td>
      <td><FileStatusIcons file={file} /></td>
    </tr>
  );
}
