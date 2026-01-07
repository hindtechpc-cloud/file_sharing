export default function FileInfo({ file }) {
  return (
    <div className="   p-4 text-sm space-y-1">
      <Row text={"File Size: "} info={file.size} />
      <Row text={"Modified: "} info={file.modified} />
      <Row text={"Owner: "} info={"Alex Johnson"} />
    </div>
  );
}
const Row = ({ text, info }) => {
  return (
    <div className="flex items-center justify-between ">
      {" "}
      <p>
        <b>{text}</b>
      </p>{" "}
      <p> {info}</p>
    </div>
  );
};
