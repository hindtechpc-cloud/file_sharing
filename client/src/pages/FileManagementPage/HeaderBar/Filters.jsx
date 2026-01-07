export function Filters() {
  return (
    <div className="flex gap-4 mt-4 text-sm text-gray-600">
      <Filter label="Sort By" />
      <Filter label="File Type" />
      <Filter label="Summary Status" />
      <Filter label="Scan Status" />
    </div>
  );
}

function Filter({ label }) {
  return (
    <button className="hover:text-gray-900">
      {label} ▾
    </button>
  );
}
