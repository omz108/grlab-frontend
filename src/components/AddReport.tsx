import { useState } from "react";
import api from "../api/axiosInstance";
import { ReportCard } from "./reportCard";

export function AddReport() {
  const [reportData, setReportData] = useState({
    reportType: "",
    reportNumber: "",
    conclusions: "",
    colour: "",
    dimensions: "",
    shapeCut: "",
    species: "",
    weight: "",
    refractiveIndex: "",
    specificGravity: "",
    opticCharacter: "",
    magnification: "",
    remarks: "",
    imageUrl: "",
  });

  const [submittedReport, setSubmittedReport] = useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReportData({ ...reportData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await api.post("/admin/addRecord", reportData, {
        headers: { 'Content-Type': 'application/json'}
      });
      setSubmittedReport(response.data);
      setReportData({
        reportType: "",
        reportNumber: "",
        conclusions: "",
        colour: "",
        dimensions: "",
        shapeCut: "",
        species: "",
        weight: "",
        refractiveIndex: "",
        specificGravity: "",
        opticCharacter: "",
        magnification: "",
        remarks: "",
        imageUrl: "",
      });
    } catch (error: any) {
      if (error.response && error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert("An error occurred while adding the report.");
      }
    }
  };

  return (
    <div className="p-6">
      {!submittedReport ? (
        <div className="">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold mb-4">Add New Report</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
            {Object.keys(reportData).map((key) => (
              <div key={key} className="flex flex-col">
                <label className="font-medium text-sm text-gray-700 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type="text"
                  name={key}
                  value={(reportData as any)[key]}
                  onChange={handleChange}
                  required={key === "reportNumber"}
                  className="w-60 px-2 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Report Added Successfully</h2>
          <ReportCard report={submittedReport} />
          <button
            onClick={() => setSubmittedReport(null)}
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
          >
            Add Another Report
          </button>
        </div>
      )}
    </div>
  );
}
