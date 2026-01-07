export default function FileName({ name }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center text-gray-600">
        📄
      </div>

      <span className="font-medium text-gray-800 truncate max-w-[260px]">
        {name}
      </span>
    </div>
  );
}
