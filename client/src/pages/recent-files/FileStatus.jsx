export default function FileStatus({ status }) {
  const styles = {
    clean: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs ${styles[status]}`}
    >
      {status}
    </span>
  );
}
