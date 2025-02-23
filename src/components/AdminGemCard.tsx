import bgImage from "../assets/grlab_card.jpg";

export function AdminGemCard({ report }: { report: any }) {
    const fields = [
      // { label: "Gem Stone Name", value: report.gemStoneName },
      { label: "Weight", value: report.weight },
      { label: "Colour", value: report.colour },
      { label: "Shape & Cut", value: report.shapeCut },
      { label: "Dimension", value: report.dimension },
      { label: "Optic Character", value: report.opticCharacter },
      { label: "Refractive Index", value: report.refractiveIndex },
      { label: "Specific Gravity", value: report.specificGravity },
      { label: "Remarks", value: report.remarks },
    ];
  
    return (
      <div className="w-[1012px] h-[638px] bg-contain bg-top bg-no-repeat p-2 rounded-md shadow-md border flex flex-col printable-report relative"
      style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="flex justify-between px-3 text-[22px] font-bold text-gray-800 relative z-10 mt-24">
          <span>Report No: {report.reportNumber || "N/A"}</span>
          <span>Date: {new Date().toLocaleDateString()}</span>
        </div>

        <div className="text-[26px] font-bold text-center text-red-500 mt-1">{report.gemStoneName}</div>
  
        {/* Left-Right Partition */}
        <div className="flex flex-grow justify-between relative z-10 px-10 mt-2">
          {/* Left-side */}
          <div className="flex-grow flex flex-col space-y-2 ml-8 mt-2">
            {fields.map(({ label, value }) => (
              <div key={label} className="flex text-[20px]">
                <span className="w-48 font-semibold text-gray-700 whitespace-nowrap flex-shrink-0">{label}:</span>
                <span className="text-gray-900 flex-1 min-w-0 truncate whitespace-nowrap">{value || "N/A"}</span>
              </div>
            ))}
          </div>

          {/* Right-side / Image Section */}
          <div className="flex-shrink-0 w-[220px] flex justify-center mr-16">
            <div className="w-[220px] h-[220px] overflow-hidden">
              {report.imageUrl ? (
                <img
                  src={report.imageUrl}
                  alt="Gem Image"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-[16px]">
                  No Image Available
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  