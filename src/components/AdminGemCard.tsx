import html2canvas from "html2canvas";
import bgImage from "../assets/grlab_bg.jpg";
import { QRCodeSVG } from "qrcode.react";

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

    const qrCode = `https://grlab.in/report/${report.reportNumber}`;

    const handleSaveAsImage = () => {
      console.log("Saving as image...");
    
      const card = document.getElementById("printable-card");
      if (!card) {
        console.error("Element not found!");
        return;
      }
    
      html2canvas(card, { 
        scale: 2, 
        useCORS: true,
        width: card.scrollWidth, 
        height: card.scrollHeight,
        windowHeight: card.scrollHeight
      })
        .then((canvas) => {
          console.log("Image generated!");
    
          const dataUrl = canvas.toDataURL("image/jpeg", 1.0);
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = `gem-report-${report.reportNumber}.jpg`;
          link.click();
        })
        .catch((error) => {
          console.error("Failed to save image:", error);
        });
    };
    
    
  
    return (
      <div>
        <div
        id="printable-card" 
        className="w-[1012px] h-[638px] bg-contain bg-top bg-no-repeat p-2 rounded-md shadow-md border flex flex-col printable-report relative"
        style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="flex justify-between px-3 text-[22px] font-bold text-gray-800 relative z-10 mt-36">
            <span>Report No: {report.reportNumber || "N/A"}</span>
            <span>Date: {new Date().toLocaleDateString()}</span>
          </div>

          <div className="text-[26px] font-bold text-center text-red-500 ">{report.gemStoneName}</div>
    
          {/* Left-Right Partition */}
          <div className="flex flex-grow justify-between relative z-10 px-10 mt-2">
            {/* Left-side */}
            <div className="flex-grow flex flex-col space-y-2 ml-8 mt-2">
              {fields.map(({ label, value }) => (
                <div key={label} className="flex text-[20px] py-0.5">
                  <span className="w-48 font-bold text-black whitespace-nowrap flex-shrink-0">{label}:</span>
                  <span className="text-black font-semibold flex-1 min-w-0 truncate whitespace-nowrap leading-[1]">{value || "N/A"}</span>
                </div>
              ))}
            </div>

            {/* Right-side / Image Section */}
            <div>
              <div className="flex-shrink-0 w-[220px] flex justify-center mr-16">
                <div className="w-[220px] h-[220px] overflow-hidden border border-gray-300 rounded-lg bg-white p-3">
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
              <div className="flex justify-center items-center ml-8 mt-2 bg-white border w-[160px] h-[160px]">
                <QRCodeSVG value={qrCode} size={100} />
              </div>
            </div>
          </div>
        </div>
        <button
        onClick={handleSaveAsImage}
        className="mt-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
      >
        Save as JPG
      </button>
      </div>
    );
  }
  