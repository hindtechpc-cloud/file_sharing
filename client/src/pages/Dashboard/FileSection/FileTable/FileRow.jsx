import FileActions from "./FileRow/FileActions";
import FileMeta from "./FileRow/FileMeta";
import FileName from "./FileRow/FileName";
import FileStatusBadge from "./FileRow/FileStatusBadge";

export default function FileRow({ name, modified, size, status, badgeColor }) {
  return (
    <tr className="border-t border-gray-200">
      <td className="px-6 py-4">
        <FileName name={name} />
      </td>

      <td className="px-6 py-4">
        <FileMeta value={modified} />
      </td>

      <td className="px-6 py-4">
        <FileMeta value={size} />
      </td>

      <td className="px-6 py-4">
        <FileStatusBadge status={status} color={badgeColor} />
      </td>

      <td className="px-6 py-4 text-right">
        <FileActions />
      </td>
    </tr>
  );
}
