import { MdOutlineSummarize } from "react-icons/md";


export default function AISummary() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <h3 className="flex items-center justify-start gap-1 font-semibold mb-2"> <MdOutlineSummarize/><span>AI Generated Summary</span></h3>
      <p className="text-sm text-gray-600">
        This document outlines the initial brief for Project Alpha...
      </p>
    </div>
  );
}
