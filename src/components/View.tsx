import { useState } from "react";
import api from "../api/axiosInstance";
import { GemReportCard } from "./GemReportCard";
import { RudrakshaReportCard } from "./RudrakshaReportCard";

export function View() {
  const [report, setReport] = useState<any | null>(null);
  const [allGems, setAllGems] = useState<any | null>(null);
  const [allRudraksha, setAllRudraksha] = useState<any | null>(null);
  const [reportNumber, setReportNumber] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Function to handle fetching and displaying all reports - Gems
  const showAllGems = async () => {
    try {
      const res = await api.get("admin/fetchAllGems");
      if (res && res.data) {
        setAllGems(res.data);
        setReport(null); // Reset the report when showing all reports
        setAllRudraksha(null);
        setIsEditing(false);
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
        setIsEditing(false);
      }
    } catch (error:any) {
        if (error.response && error.response.data.error) {
            alert(error.response.data.error);
          } else {
            alert("Error while fetching all data.");
          }
    }
  };
  
  const handleDelete = async () => {
    try {
      await api.delete(`/admin/report/${report.reportNumber}`);
      alert("Report deleted successfully");
      setReport(null);
    } catch (error: any) {
      if (error.response && error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert("Error deleting report.");
      }
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  }

  const handleEditSubmit = async () => {

    const formData = new FormData();
    Object.keys(report).forEach((key) => {
      if (key !== 'id') {
        formData.append(key, report[key]);
      }
    });

    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const response = await api.put(`/admin/report/${report.reportNumber}`, formData, {
        headers: { "Content-Type": "multipart/form-data"}
      });
      alert(response.data.message);
      setReport(response.data.updatedReport);
      setIsEditing(false);
    } catch(error:any) {
      if (error.response && error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert("Error updating report.");
      }
    }
  }

  

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
          className="px-3 py-2 bg-blue-500 border rounded-lg text-white hover:bg-blue-600"
          onClick={async () => {
            try {
              const res = await api.get(`/admin/reportDetail/${reportNumber}`);
              if (res) {
                setReport(res.data); // Show selected report
                setAllGems(null); // Hide all reports if viewing a single report
                setAllRudraksha(null);
                setIsEditing(false);
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
          className="px-3 py-2 bg-blue-500 border rounded-lg text-white hover:bg-blue-600"
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
          className="px-3 py-2 bg-blue-500 border rounded-lg text-white hover:bg-blue-600"
          onClick={showAllRudraksha}
        >
          View
        </button>
      </div>

      {/* Displaying selected report or list of all reports */}
      {!isEditing? (<div>
        {/* Display single report */}
        <div className="flex justify-center">
        {report?.reportNumber?.startsWith('G') && <GemReportCard report={report} />}
        {report?.reportNumber?.startsWith('R') && <RudrakshaReportCard report={report} />}
        </div>
        {
          report && <div className="flex justify-center gap-4 -mt-20">
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
        }
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
      </div>) : (
        <div className="flex justify-center">
          <div className="w-full max-w-3xl bg-white p-10 pl-20">
            <div className="flex">
            <h2 className="text-2xl font-bold mb-4 text-red-400">Edit Report - </h2>
            <h2 className="text-2xl font-bold ml-1">{report.reportNumber}</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(report)
              .filter((key) => key !== 'id' && key!== 'reportNumber' && key !== 'imageUrl')
              .map((key) => (
                <div key={key}>
                  <label htmlFor={key} className="block font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}</label>
                  <input 
                  type="text"
                  name={key}
                  id={key}
                  value={report[key]}
                  className="w-60 p-2 border rounded"
                  onChange={(e) => setReport({...report, [key]: e.target.value})}
                  />
                </div>
              ))}
              <div>
                <label className="font-medium block">Image</label>
                <input 
                type="file" 
                accept="/image/*"
                onChange={handleImageChange}
                className="w-60 px-2 py-2 border rounded"
                />
              </div>
            </div>
            <button
            onClick={handleEditSubmit}
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >Submit Changes</button>
          </div>
        </div>
      ) }
    </div>
  );
}
