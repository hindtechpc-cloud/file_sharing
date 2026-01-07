import FileSection from "./Dashboard/FileSection";
import TopBar from "./Dashboard/Topbar";
import UploadSection from "./Dashboard/UploadSection";

export default function Dashboard() {
  return (
  <div>
      

      <div className="min-h-screen  p-6">
   
      <UploadSection />
      <FileSection />
    </div>
  </div>
  );
}
