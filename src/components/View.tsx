import { useState } from "react";
import api from "../api/axiosInstance";
import { GemReportCard } from "./GemReportCard";
import { RudrakshaReportCard } from "./RudrakshaReportCard";

export function View() {
  const [report, setReport] = useState<any | null>(null);
  const [allGems, setAllGems] = useState<any | null>(null);
  const [allRudraksha, setAllRudraksha] = useState<any | null>(null);
  const [reportNumber, setReportNumber] = useState("");

  // Function to handle fetching and displaying all reports - Gems
  const showAllGems = async () => {
    try {
      const res = await api.get("admin/fetchAllGems");
      if (res && res.data) {
        setAllGems(res.data);
        setReport(null); // Reset the report when showing all reports
        setAllRudraksha(null);
      }
    } catch (error:any) {
        if (error.response && error.response.data.error) {
            alert(error.response.data.error);
          } else {
            alert("Error while fetching all data.");
          }
    }
  };

  // Function to handle fetching and displaying all reports - Rudraksha
  const showAllRudraksha = async () => {
    try {
      const res = await api.get("admin/fetchAllRudraksha");
      if (res && res.data) {
        setAllRudraksha(res.data);
        setReport(null); // Reset the report when showing all reports
        setAllGems(null);
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
                setAllGems(null); // Hide all reports if viewing a single report
                setAllRudraksha(null);
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

      {/* Show all Gem reports button */}
      <div className="m-5 flex">
        <h2 className="px-3 py-2 font-medium">
          Show All Gem Reports
        </h2>
        <button
          className="px-3 py-2 bg-red-500 border rounded-lg text-white"
          onClick={showAllGems}
        >
          View
        </button>
      </div>

      {/* Show all Rudraksha reports button */}
      <div className="m-5 flex">
        <h2 className="px-3 py-2 font-medium">
          Show All Rudraksha Reports
        </h2>
        <button
          className="px-3 py-2 bg-red-500 border rounded-lg text-white"
          onClick={showAllRudraksha}
        >
          View
        </button>
      </div>

      {/* Displaying selected report or list of all reports */}
      <div>
        {/* Display single report */}
        {report?.reportNumber?.startsWith('G') && <GemReportCard report={report} />}
        {report?.reportNumber?.startsWith('R') && <RudrakshaReportCard report={report} />}

        {/* Display list of all Gems */}
        {allGems && (
          <div className="space-y-4">
            {allGems.map((report: { reportNumber: string }) => (
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
                        setAllGems(null); // Reset the list of reports
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

        {/* Display list of all Rudraksha */}
        {allRudraksha && (
          <div className="space-y-4">
            {allRudraksha.map((report: { reportNumber: string }) => (
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
                        setAllRudraksha(null); // Reset the list of reports
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
