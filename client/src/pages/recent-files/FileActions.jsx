import { MdDelete } from "react-icons/md";
import { LuDownload } from "react-icons/lu";

export default function FileActions({ file, onDelete }) {
  return (
    <div className="flex justify-end gap-2">
      <button className="text-blue-600 text-sm hover:underline cursor-pointer">
        <LuDownload size={20}/>
      </button>

      <button
        onClick={() => onDelete(file.id)}
        className="text-red-600 text-sm hover:underline cursor-pointer"
      >
        <MdDelete size={20}/>
      </button>
    </div>
  );
}
