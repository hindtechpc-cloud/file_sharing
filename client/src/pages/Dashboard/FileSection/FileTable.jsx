import FileRow from "./FileTable/FileRow";
import FileTableHeader from "./FileTable/FileTableHeader";

export default function FileTable() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      {/* Desktop / Tablet Table */}
      <div className="hidden md:block">
        <table className="w-full text-sm">
          <FileTableHeader />
          <tbody>
            <FileRow
              name="Annual_Report_2023.pdf"
              modified="2 days ago"
              size="5.2 MB"
              status="Scanned Clean"
              badgeColor="green"
            />
            <FileRow
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
            />
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
      <div className="font-medium text-gray-900 text-sm break-all">
        {name}
      </div>

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
