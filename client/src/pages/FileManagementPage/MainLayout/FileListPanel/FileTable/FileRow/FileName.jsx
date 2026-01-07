export default function FileName({ name }) {
  return (
    <div className="flex items-center gap-2">
      📄
      <span className="font-medium">{name}</span>
    </div>
  );
}
