import React, { useState } from 'react';
import { AddGemReport } from './AddGemReport';
import { AddRudraksha } from './AddRudraksha';

export function AddReport() {
  const [selectedReportType, setSelectedReportType] = useState<'gemReport' | 'rudrakshReport' | null>('gemReport');

  // Function to handle the report type change
  const handleReportTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedReportType(event.target.value as 'gemReport' | 'rudrakshReport');
  };

  return (
    <div className='flex justify-center'>
    <div className="my-12 w-full max-w-4xl bg-white p-6 rounded-lg shadow-md border">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Report</h2>

      {/* Report Type Selection */}
      <div className="mb-4">
        <label className="font-medium text-gray-700 mb-2">Select Report Type:</label>
        <div className="space-x-4">
          <label>
            <input
              type="radio"
              value="gemReport"
              checked={selectedReportType === 'gemReport'}
              onChange={handleReportTypeChange}
              className="mr-2"
            />
            Gem Report
          </label>
          <label>
            <input
              type="radio"
              value="rudrakshReport"
              checked={selectedReportType === 'rudrakshReport'}
              onChange={handleReportTypeChange}
              className="mr-2"
            />
            Rudraksh Report
          </label>
        </div>
      </div>

      {/* Render the form based on the selected report type */}
      {selectedReportType === 'gemReport' && <AddGemReport />}

      {selectedReportType === 'rudrakshReport' && <AddRudraksha />}
    </div>
    </div>
  );
}
