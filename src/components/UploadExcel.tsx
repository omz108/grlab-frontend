import { useState } from "react"

export function UploadExcel() {

    const [reportType, setReportType] = useState<"gem" | "rudraksha">("gem")

    return <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Upload Excel file</h2>
        <div>
            <label htmlFor="reportType" className="mr-2">Select Report Type</label>
            <select name="" id="reportType" 
            value={reportType}
            onChange={(e) => setReportType(e.target.value as "gem" | "rudraksha")}
            className="p-2 border rounded"
            >
                <option value="gem">Gem Reports</option>
                <option value="rudraksha">Rudraksha Reports</option>
            </select>
        </div>
    </div>
}