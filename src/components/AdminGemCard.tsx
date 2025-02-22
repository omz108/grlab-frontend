import bgImage from "../assets/grlab_card.jpg";

export function AdminGemCard({ report }: { report: any }) {
    const fields = [
      { label: "Report Number", value: report.reportNumber },
      { label: "Gem Stone Name", value: report.gemStoneName },
      { label: "Weight", value: report.weight },
      { label: "Colour", value: report.colour },
      { label: "Shape & Cut", value: report.shapeCut },
      { label: "Dimension", value: report.dimension },
    //   { label: "Species", value: report.species },
      { label: "Optic Character", value: report.opticCharacter },
      { label: "Refractive Index", value: report.refractiveIndex },
      { label: "Specific Gravity", value: report.specificGravity },
      { label: "Remarks", value: report.remarks },
    ];
  
    return (
      <div className="w-[225px] h-[160px] bg-cover bg-center bg-no-repeat p-2 rounded-md shadow-md border flex flex-col printable-report"
      style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="flex justify-between px-1 text-[8px] font-semibold text-gray-800 mb-1">
          <span>Report No: {report.reportNumber || "N/A"}</span>
          <span>Date: {new Date().toLocaleDateString()}</span>
        </div>
  
        {/* Left-Right Partition */}
        <div className="flex flex-grow">
          {/* Left-side */}
          <div className="flrx-grow flex flex-col justify-center px-1">
            {fields.map(({ label, value }) => (
              <div key={label} className="flex text-[7px]">
                <span className="w-24 font-semibold text-gray-700 truncate">{label}:</span>
                <span className={`text-gray-900 flex-1 truncate}`}>{value || "N/A"}</span>
              </div>
            ))}
          </div>

          {/* Right-side / Image Section */}
          <div className="flex-shrink-0 w-1/3 flex items-center justify-center">
            <div className="w-20 h-18 border border-gray-300 rounded-lg overflow-hidden bg-gray-100 ">
              {report.imageUrl ? (
                <img
                  src={report.imageUrl}
                  alt="Gem Image"
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
      </div>
    );
  }
  