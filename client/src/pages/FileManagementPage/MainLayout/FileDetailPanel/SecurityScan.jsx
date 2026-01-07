import { MdOutlineSecurity } from "react-icons/md";

export default function SecurityScan() {
  return (
    <div className="border flex items-center justify-start gap-2  border-green-300 bg-gray-50 rounded-xl p-4">
     <div className=" flex items-center justify-center w-10 h-10 rounded-full bg-green-200">
      
       <MdOutlineSecurity size={20} className="text-green-700 "/></div> <span>File is clean. No threats found.</span>
    </div>
  );
}
