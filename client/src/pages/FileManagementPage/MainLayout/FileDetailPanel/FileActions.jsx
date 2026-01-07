import { LuDownload } from "react-icons/lu";
import { MdEdit } from "react-icons/md";
import { CiLink } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";
import { MdDelete } from "react-icons/md";

export default function FileActions() {
  return (
    <div className=" rounded-xl  p-2 flex flex-wrap gap-2">
      <PrimaryButton label="Download" icon={<LuDownload size={20} />} />
      <SecondaryButton label="Edit Content" icon={<MdEdit size={20} />} />
      <SecondaryButton label="Copy Link" icon={<CiLink size={20} />} />
      <SecondaryButton label="Set Expiry" icon={<IoIosTimer size={20} />} />
      <DangerButton label="Delete" icon={<MdDelete size={20} />} />
    </div>
  );
}

const PrimaryButton = ({ label, icon }) => (
  <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 cursor-pointer py-2 rounded-lg">
    <span>{icon}</span>
    <span> {label}</span>
  </button>
);

const SecondaryButton = ({ label, icon }) => (
  <button className="flex items-center justify-center gap-2 border border-gray-200 bg-gray-200 cursor-pointer px-4 py-2 rounded-lg">
    {" "}
    <span>{icon}</span>
    <span> {label}</span>
  </button>
);

const DangerButton = ({ label, icon }) => (
  <button className="flex items-center justify-center gap-2 bg-red-100 cursor-pointer text-red-600 px-4 py-2 rounded-lg">
    <span>{icon}</span>
    <span> {label}</span>
  </button>
);
