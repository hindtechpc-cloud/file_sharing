export default function FileStatusIcons({ file }) {
  return (
    <div className="flex gap-2">
      {file && <span className="text-green-600">✔</span>}
      {file && <span className="text-blue-600">📄</span>}
    </div>
  );
}
