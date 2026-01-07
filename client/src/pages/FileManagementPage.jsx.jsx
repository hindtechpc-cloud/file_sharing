import React from "react";
import HeaderBar from "./FileManagementPage/HeaderBar";
import MainLayout from "./FileManagementPage/MainLayout";

export default function FileManagementPage() {
  const [selectedFile, setSelectedFile] = React.useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <HeaderBar/>
      <MainLayout
        selectedFile={selectedFile}
        onSelectFile={setSelectedFile}
      />
    </div>
  );
}
