export default function FileStatusIcons({ file }) {
  return (
    <div className="flex gap-2">
      {file.clean && <span className="text-green-600">✔</span>}
      {file.summarized && <span className="text-blue-600">📄</span>}
    </div>
  );
}
