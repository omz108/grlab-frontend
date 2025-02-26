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
      <div className="my-6 w-full md:w-[793px] h-auto md:h-[561px] bg-white p-4 md:p-6 rounded-md md:rounded-lg shadow-md border flex flex-col md:flex-row printable-report">
  
        {/* Details Section */}
        <div className="flex-grow p-10">
          <h2 className="text-lg md:text-xl font-semibold text-red-400 mb-3 md:mb-4 text-center">Report Details</h2>
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
        <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col justify-center items-center mt-4 md:mt-0">
          <div className="w-32 h-32 md:w-40 md:h-40 border border-gray-300 rounded-lg overflow-hidden bg-gray-100 ">
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
          <p className="mt-2 text-gray-800 font-medium text-sm md:text-base">
            {report.gemStoneName || "Rudraksha"}
          </p>
        </div>
      </div>
    );
  }
  