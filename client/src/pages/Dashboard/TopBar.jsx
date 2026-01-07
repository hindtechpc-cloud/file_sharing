import SearchBar from "./TopBar/SearchBar";
import TopActions from "./TopBar/TopActions";

export default function TopBar() {
  return (
    <div className="hidden md:flex items-center justify-between  px-6  py-5 lg:px-8  ">
      <h1 className="text-xl font-semibold text--800">Dashboard</h1>

      <div className="flex items-center gap-4">
        <SearchBar />
        <TopActions />
      </div>
    </div>
  );
}
