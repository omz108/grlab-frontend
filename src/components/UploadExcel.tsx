import { useState } from "react"
import api from "../api/axiosInstance";

export function UploadExcel() {

    const [reportType, setReportType] = useState<"gem" | "rudraksha">("gem");
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            alert("Please select an Excel file");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("reportType", reportType);

        try {
            const response = await api.post('/admin/uploadExcel', formData, {
                headers: { "Content-Type": "multipart/form-data" }
            })
            alert(response.data.message);
        } catch (err: any) {
            alert(err?.response?.data?.error || "Error uploading file");
        }
    };

    return <div className="flex justify-center mt-10">
        <div className="p-12 bg-white width-full max-w-md rounded-lg shadow-md space-y-5">
            <h2 className="text-xl font-bold mb-4">Upload Excel file</h2>
            <div>
                <label htmlFor="reportType" className="mr-3">Select Report Type</label>
                <select name="" id="reportType" 
                value={reportType}
                onChange={(e) => setReportType(e.target.value as "gem" | "rudraksha")}
                className="p-2 border rounded"
                >
                    <option value="gem">Gem Reports</option>
                    <option value="rudraksha">Rudraksha Reports</option>
                </select>
            </div>
            <input type="file" accept=".xlsx" onChange={handleFileChange}/>
            <button
            onClick={handleUpload}
            className="px-3 py-2 bg-blue-500 text-white border rounded-lg hover:bg-blue-600 transition"
            >Upload</button>
        </div>
    </div>
}