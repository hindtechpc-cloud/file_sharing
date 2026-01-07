import FileName from "./FileName";
import FileMeta from "./FileMeta";
import FileSize from "./FileSize";
import FileStatus from "./FileStatus";
import FileActions from "./FileActions";

export default function RecentFileRow({ file, onDelete }) {
  return (
    <tr className="border-t  border-gray-200 hover:bg-gray-50">
      <td className="px-6 py-4">
        <FileName name={file.name} />
      </td>

      <td>
        <FileMeta value={file.modified} />
      </td>

      <td>
        <FileSize size={file.size} />
      </td>

      <td>
        <FileStatus status={file.status} />
      </td>

      <td className="px-6 text-right ">
        <FileActions file={file} onDelete={onDelete} />
      </td>
    </tr>
  );
}
