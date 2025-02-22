import { useState } from "react";
import api from "../api/axiosInstance";
import { AdminGemCard } from "./AdminGemCard";

export function AddGemReport() {
  const [reportData, setReportData] = useState({
    gemStoneName: "",
    weight: "",
    colour: "",
    shapeCut: "",
    dimension: "",
    // species: "",
    refractiveIndex: "",
    specificGravity: "",
    opticCharacter: "",
    remarks: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [submittedReport, setSubmittedReport] = useState(null);

  // Handle text input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReportData({ ...reportData, [name]: value });
  };

  // Handle image file change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    // if (!reportData.reportNumber) {
    //   alert("Report Number is required!");
    //   return;
    // }

    const formData = new FormData();
    // Append text fields to FormData
    Object.keys(reportData).forEach((key) => {
      formData.append(key, (reportData as any)[key]);
    });

    // Append the image file to FormData
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const response = await api.post("/admin/addGemRecord", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSubmittedReport(response.data);

      // Reset form
      setReportData({
        gemStoneName: "",
        colour: "",
        dimension: "",
        shapeCut: "",
        // species: "",
        weight: "",
        refractiveIndex: "",
        specificGravity: "",
        opticCharacter: "",
        remarks: "",
      });
      setImageFile(null);
    } catch (error: any) {
        // console.log(error)
      if (error.response && error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert("An error occurred while adding the report.");
      }
    }
  };

  // Handle printing the report
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6">
      {!submittedReport ? (
        <div className="ml-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-4 text-red-400">Add Gem Report</h2>
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
              <div className="flex flex-col">
                <label className="font-medium text-sm text-gray-700">Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-60 px-2 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
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
          <h2 className="text-2xl font-bold mb-4 text-red-400">Report Added Successfully</h2>
          <AdminGemCard report={submittedReport} />
          <button
            onClick={() => setSubmittedReport(null)}
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
          >
            Add Another Report
          </button>
          <button
            onClick={handlePrint}
            className="mt-4 ml-2 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
          >
            Print Report
          </button>
        </div>
      )}
    </div>
  );
}
