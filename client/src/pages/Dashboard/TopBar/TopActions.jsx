import { FaRegBell } from "react-icons/fa";
import { SlQuestion } from "react-icons/sl";

export default function TopActions() {
  const actions = [<FaRegBell size={24} />, <SlQuestion size={24} />];
  return (
    <div className="flex items-center gap-3">
      {actions.length > 0 &&
        actions.map((act,index) => {
          return (
            <button key={index+1} className="p-2 rounded-md border border-gray-200 bg-white shadow-2xl hover:bg-gray-100 cursor-pointer">
              {act}
            </button>
          );
        })}
    </div>
  );
}
