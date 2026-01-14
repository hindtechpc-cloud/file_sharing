import axios from "axios";
import FileRow from "./FileTable/FileRow";
import FileTableHeader from "./FileTable/FileTableHeader";
import { useState } from "react";
import { useEffect } from "react";
import { formatDate } from "../../../utils/formateDate";
import { useContext } from "react";
import { AuthContext } from "../../../context/Authcontext";

import { FileContext } from "../../../context/FileContext";

export default function FileTable() {
  const { files, setFiles, loadFiles } = useContext(FileContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    loadFiles();
  }, []);
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      {/* Desktop / Tablet Table */}
      <div className="hidden md:block">
        <table className="w-full text-sm">
          <FileTableHeader />
          <tbody>
            {files.length > 0 ? (
              files.map((file) => {
                return (
                  <FileRow
                    key={file._id}
                    name={file.file || "Annual_Report_2023.pdf"}
                    modified={formatDate(file.updatedAt) || "2 days ago"}
                    size={file?.size || "5.2 MB"}
                    status={file?.status.enum[0] || "Scanned Clean"}
                    badgeColor={"green"}
                  />
                );
              })
            ) : (
              <p className="flex text-center col-span-4 items-center justify-center my-2 w-full">
                Files not found
              </p>
            )}

            {/* <FileRow
              name="Project_Proposal_Draft.docx"
              modified="5 days ago"
              size="1.1 MB"
              status="Draft"
              badgeColor="gray"
            />
            <FileRow
              name="Meeting_Notes_AI.txt"
              modified="1 week ago"
              size="12 KB"
              status="Summarized"
              badgeColor="purple"
            /> */}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden divide-y">
        <MobileFileCard
          name="Annual_Report_2023.pdf"
          modified="2 days ago"
          size="5.2 MB"
          status="Scanned Clean"
          badgeColor="green"
        />
        <MobileFileCard
          name="Project_Proposal_Draft.docx"
          modified="5 days ago"
          size="1.1 MB"
          status="Draft"
          badgeColor="gray"
        />
        <MobileFileCard
          name="Meeting_Notes_AI.txt"
          modified="1 week ago"
          size="12 KB"
          status="Summarized"
          badgeColor="purple"
        />
      </div>
    </div>
  );
}

function MobileFileCard({ name, modified, size, status, badgeColor }) {
  return (
    <div className="p-4 flex flex-col gap-2">
      <div className="font-medium text-gray-900 text-sm break-all">{name}</div>

      <div className="flex justify-between text-xs text-gray-500">
        <span>Modified: {modified}</span>
        <span>{size}</span>
      </div>

      <div>
        <span
          className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium
            ${badgeColor === "green" && "bg-green-100 text-green-700"}
            ${badgeColor === "gray" && "bg-gray-100 text-gray-700"}
            ${badgeColor === "purple" && "bg-purple-100 text-purple-700"}
          `}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
