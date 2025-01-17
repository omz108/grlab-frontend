// import { useState } from "react"
// import api from "../api/axiosInstance";
// import { ReportCard } from "./reportCard";

// function showAllReports() {

// }

// export function View() {

//     const [report, setReport] = useState<any | null>(null);
//     const [allReports, setAllReports] = useState<any | null>(null);
//     const [reportNumber, setReportNumber] = useState('');

//     return <div>
//         <div className="m-5">
//             <input 
//             className="py-2 px-3 mr-3  border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//             type="text" placeholder="Report Number"
//             onChange={ async (e) => setReportNumber(e.target.value)}
//             />
//             <button className="px-3 py-2 bg-blue-500 border rounded-lg text-white"
//             onClick={ async () => {
//                 try {
//                     const res = await api.get(`/admin/reportDetail/${reportNumber}`)
//                     if (res) {
//                         setReport(res.data);
//                         setAllReports(null);
//                     }
//                 } catch(err) {
//                     console.log(err);
//                 }
//             }}
//             >View Report</button>
//         </div>
//         <div className="m-5 flex">
//             <h2 className="px-3 py-2 font-medium">If you want to view all Reports then click this red button</h2>
//         <button className="px-3 py-2 bg-red-500 border rounded-lg text-white"
//             onClick={ async () => {
//                 const res = await api.get('/fetchAllReports');
//                 if(res){
//                     setAllReports(res.data);
//                     setReport(null);
//                 }
//             }}
//             >Show All Reports</button>
//         </div>
//         <div>
//             <div>
//                 {report && <ReportCard report={report} />}
//             </div>
//             <div>
//                 {allReports && }
//             </div>
//         </div>
//     </div>
// }


import { useState } from "react";
import api from "../api/axiosInstance";
import { ReportCard } from "./reportCard";

export function View() {
  const [report, setReport] = useState<any | null>(null);
  const [allReports, setAllReports] = useState<any | null>(null);
  const [reportNumber, setReportNumber] = useState("");

  // Function to handle fetching and displaying all reports
  const showAllReports = async () => {
    try {
      const res = await api.get("admin/fetchAllReports");
      if (res && res.data) {
        setAllReports(res.data);
        setReport(null); // Reset the report when showing all reports
      }
    } catch (error:any) {
        if (error.response && error.response.data.error) {
            alert(error.response.data.error);
          } else {
            alert("Error while fetching all data.");
          }
    }
  };

  return (
    <div>
      {/* Report number search */}
      <div className="m-5">
        <input
          className="py-2 px-3 mr-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          placeholder="Report Number"
          onChange={async (e) => setReportNumber(e.target.value)}
        />
        <button
          className="px-3 py-2 bg-blue-500 border rounded-lg text-white"
          onClick={async () => {
            try {
              const res = await api.get(`/admin/reportDetail/${reportNumber}`);
              if (res) {
                setReport(res.data); // Show selected report
                setAllReports(null); // Hide all reports if viewing a single report
              }
            } catch (error:any) {
                if (error.response && error.response.data.error) {
                    alert(error.response.data.error);
                  } else {
                    alert("Error fetching data.");
                  }
            }
          }}
        >
          View Report
        </button>
      </div>

      {/* Show all reports button */}
      <div className="m-5 flex">
        <h2 className="px-3 py-2 font-medium">
          If you want to view all reports then click this red button
        </h2>
        <button
          className="px-3 py-2 bg-red-500 border rounded-lg text-white"
          onClick={showAllReports}
        >
          Show All Reports
        </button>
      </div>

      {/* Displaying selected report or list of all reports */}
      <div>
        {/* Display single report */}
        {report && <ReportCard report={report} />}

        {/* Display list of all reports */}
        {allReports && (
          <div className="space-y-4">
            {allReports.map((report: { reportNumber: string }) => (
              <div key={report.reportNumber}>
                <button
                  className="py-2 px-4 bg-gray-200 border rounded-md"
                  onClick={async () => {
                    try {
                      const res = await api.get(
                        `/admin/reportDetail/${report.reportNumber}`
                      );
                      if (res) {
                        setReport(res.data);
                        setAllReports(null); // Reset the list of reports
                      }
                    } catch (error: any) {
                        if (error.response && error.response.data.error) {
                            alert(error.response.data.error);
                          } else {
                            alert("Error fetching data.");
                          }
                    }
                  }}
                >
                  {report.reportNumber}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
