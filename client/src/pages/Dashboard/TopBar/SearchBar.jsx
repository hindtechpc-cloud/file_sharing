import { IoMdSearch } from "react-icons/io";

export default function SearchBar() {
  return (
    <div className="flex items-center justify-center gap-2 w-[350px] px-2 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
      <IoMdSearch size={25}/>

      <input
        type="text"
        placeholder="Search by name or within file content..."
        className="w-full   rounded-lg text-sm focus:outline-none outline-none"
      />
    </div>
  );
}
