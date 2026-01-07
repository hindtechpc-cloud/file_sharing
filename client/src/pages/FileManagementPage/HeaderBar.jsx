import { Filters } from "./HeaderBar/Filters";
import Title from "./HeaderBar/Title";
import ViewToggle from "./HeaderBar/ViewToggle";

export default function HeaderBar() {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center">
        <Title />
        <ViewToggle />
      </div>
      <Filters />
    </div>
  );
}
