import { useState } from "react";
import api from "../api/axiosInstance";
import { ReportCard } from "./reportCard";

export function EditReport() {
  const [reportNumber, setReportNumber] = useState("");
  const [fetchedReport, setFetchedReport] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [editData, setEditData] = useState<any>({});

  const handleFetchReport = async () => {
    try {
      const response = await api.get(`/admin/reportDetail/${reportNumber}`);
      setFetchedReport(response.data);
      setEditData(response.data);
    } catch (error: any) {
      if (error.response && error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert("Error fetching report.");
      }
    }
  };

  const handleEditSubmit = async () => {
    try {
      const response = await api.put(`/admin/report/${reportNumber}`, editData);
      setFetchedReport(response.data);
      setIsEditing(false);
    } catch (error: any) {
      if (error.response && error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert("Error updating report.");
      }
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/admin/report/${reportNumber}`);
      alert("Report deleted successfully");
      setFetchedReport(null);
    } catch (error: any) {
      if (error.response && error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert("Error deleting report.");
      }
    }
  };

  return (
    <div className="p-6">
      {!fetchedReport ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Edit or Delete Report</h2>
          <label className="block font-medium mb-2">Enter Report Number</label>
          <input
            type="text"
            value={reportNumber}
            onChange={(e) => setReportNumber(e.target.value)}
            className="p-2 border rounded m-4"
          />
          <button
            onClick={handleFetchReport}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Show Report
          </button>
        </div>
      ) : (
        <div>
          {!isEditing ? (
            <div>
              <ReportCard report={fetchedReport} />
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-yellow-500 text-white py-2 px-4 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-4">Edit Report</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.keys(editData).map((key) => (
                  <div key={key}>
                    <label className="block font-medium">{key}</label>
                    <input
                      type="text"
                      name={key}
                      value={(editData as any)[key]}
                      onChange={(e) =>
                        setEditData({ ...editData, [key]: e.target.value })
                      }
                      className="w-full p-2 border rounded"
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={handleEditSubmit}
                className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
              >
                Submit Changes
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
