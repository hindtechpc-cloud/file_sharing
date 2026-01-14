export default function FileStatusBadge({ status, color }) {
  const colors = {
    green: "bg-green-100 text-green-700",
    purple: "bg-purple-100 text-purple-700",
    gray: "bg-gray-100 text-gray-700",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs`}>
      {status }
    </span>
  );
}
