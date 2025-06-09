import React from "react";

const ContractPreviewPanel = ({ contract }) => {
  const {
    employeeName,
    functionTitle,
    startDate,
    endDate,
    salaryAmount,
    numberOfHoursPerWeek,
    contractDuration,
    numberOfHolidayDays,
  } = contract;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:sticky lg:top-8 border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">Contract Preview</h2>
      <ul className="text-sm text-gray-700 space-y-2">
        <li className="flex justify-between"><span className="font-medium">Employee:</span> <span>{employeeName}</span></li>
        <li className="flex justify-between"><span className="font-medium">Function:</span> <span>{functionTitle}</span></li>
        <li className="flex justify-between"><span className="font-medium">Start Date:</span> <span>{startDate}</span></li>
        <li className="flex justify-between"><span className="font-medium">End Date:</span> <span>{endDate}</span></li>
        <li className="flex justify-between"><span className="font-medium">Duration:</span> <span>{contractDuration} months</span></li>
        <li className="flex justify-between"><span className="font-medium">Salary:</span> <span>€{salaryAmount} / month</span></li>
        <li className="flex justify-between"><span className="font-medium">Hours/Week:</span> <span>{numberOfHoursPerWeek}</span></li>
        <li className="flex justify-between"><span className="font-medium">Holiday Days:</span> <span>{numberOfHolidayDays}</span></li>
      </ul>
    </div>
  );
};

export default ContractPreviewPanel;
