// import { useState } from "react";
// import api from "../api/axiosInstance";
// import { ReportCard } from "./reportCard";

// export function AddReport() {
//   const [reportData, setReportData] = useState({
//     reportType: "",
//     reportNumber: "",
//     conclusions: "",
//     colour: "",
//     dimensions: "",
//     shapeCut: "",
//     species: "",
//     weight: "",
//     refractiveIndex: "",
//     specificGravity: "",
//     opticCharacter: "",
//     magnification: "",
//     remarks: "",
//     imageUrl: "",
//   });

//   const [submittedReport, setSubmittedReport] = useState(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setReportData({ ...reportData, [name]: value });
//   };

//   const handleSubmit = async () => {
//     if (!reportData.reportNumber) {
//       alert("Report Number is required!");
//       return;
//     }
//     try {
//       const response = await api.post("/admin/addRecord", reportData, {
//         headers: { 'Content-Type': 'application/json'}
//       });
//       setSubmittedReport(response.data);
//       setReportData({
//         reportType: "",
//         reportNumber: "",
//         conclusions: "",
//         colour: "",
//         dimensions: "",
//         shapeCut: "",
//         species: "",
//         weight: "",
//         refractiveIndex: "",
//         specificGravity: "",
//         opticCharacter: "",
//         magnification: "",
//         remarks: "",
//         imageUrl: "",
//       });
//     } catch (error: any) {
//       if (error.response && error.response.data.error) {
//         alert(error.response.data.error);
//       } else {
//         alert("An error occurred while adding the report.");
//       }
//     }
//   };

//   return (
//     <div className="p-6">
//       <div></div>
//       {!submittedReport ? (
//         <div className="ml-20">
//         <div className="max-w-2xl">
//           <h2 className="text-2xl font-bold mb-4">Add New Report</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
//             {Object.keys(reportData).map((key) => (
//               <div key={key} className="flex flex-col">
//                 <label className="font-medium text-sm text-gray-700 capitalize">
//                   {key.replace(/([A-Z])/g, " $1")}
//                 </label>
//                 <input
//                   type="text"
//                   name={key}
//                   value={(reportData as any)[key]}
//                   onChange={handleChange}
//                   required={key === "reportNumber"}
//                   className="w-60 px-2 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
//                 />
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={handleSubmit}
//             className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
//           >
//             Submit
//           </button>
//         </div>
//         </div>
//       ) : (
//         <div>
//           <h2 className="text-2xl font-bold mb-4">Report Added Successfully</h2>
//           <ReportCard report={submittedReport} />
//           <button
//             onClick={() => setSubmittedReport(null)}
//             className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
//           >
//             Add Another Report
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState } from 'react';
import { AddGemReport } from './AddGemReport';
import { AddRudraksha } from './AddRudraksha';

export function AddReport() {
  const [selectedReportType, setSelectedReportType] = useState<'gemReport' | 'rudrakshReport' | null>('gemReport');

  // Function to handle the report type change
  const handleReportTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedReportType(event.target.value as 'gemReport' | 'rudrakshReport');
  };

  return (
    <div className='flex justify-center'>
    <div className="my-12 w-full max-w-4xl bg-white p-6 rounded-lg shadow-md border">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Report</h2>

      {/* Report Type Selection */}
      <div className="mb-4">
        <label className="font-medium text-gray-700 mb-2">Select Report Type:</label>
        <div className="space-x-4">
          <label>
            <input
              type="radio"
              value="gemReport"
              checked={selectedReportType === 'gemReport'}
              onChange={handleReportTypeChange}
              className="mr-2"
            />
            Gem Report
          </label>
          <label>
            <input
              type="radio"
              value="rudrakshReport"
              checked={selectedReportType === 'rudrakshReport'}
              onChange={handleReportTypeChange}
              className="mr-2"
            />
            Rudraksh Report
          </label>
        </div>
      </div>

      {/* Render the form based on the selected report type */}
      {selectedReportType === 'gemReport' && <AddGemReport />}

      {selectedReportType === 'rudrakshReport' && <AddRudraksha />}
    </div>
    </div>
  );
}
