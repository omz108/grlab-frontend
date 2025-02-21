export function RudrakshaReportCard({ report }: { report: any }) {
    const fields = [
      { label: "Report Number", value: report.reportNumber },
      { label: "Weight", value: report.weight },
      { label: "Colour", value: report.colour },
      { label: "Shape", value: report.shape },
      { label: "Dimension", value: report.dimension },
      { label: "Real Face", value: report.realFace },
      { label: "Artificial Face", value: report.artificialFace },
      { label: "Test Came Out", value: report.testCameOut },
      { label: "Remarks", value: report.remarks}
    ];
  
    return (
      <div className="my-12 w-[793px] h-[561px] max-w-4xl bg-white p-6 rounded-lg shadow-md border flex printable-report">
  
        {/* Details Section */}
        <div className="flex-grow p-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Report Details</h2>
          <div className="space-y-2">
            {fields.map(({ label, value }) => (
              <div key={label} className="flex">
                <span className="w-48 font-medium text-gray-700">{label}:</span>
                <span className={`text-gray-900 ${
                  label === "Origin" ? "text-red-500" : "" } ${
                    label === "Report Number" ? "font-bold" : ""
                }`}>{value || "N/A"}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 w-1/3 flex items-center">
          <div className="w-40 h-40 border border-gray-300 rounded-lg overflow-hidden bg-gray-100 ">
            {report.imageUrl ? (
              <img
                src={report.imageUrl}
                alt="Report Image"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                No Image Available
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  