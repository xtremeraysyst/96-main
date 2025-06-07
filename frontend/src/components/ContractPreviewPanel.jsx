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
    <div className="bg-white rounded-lg shadow p-4 w-full sm:w-80 sm:sticky sm:top-20">
      <h2 className="text-lg font-semibold mb-2 text-gray-800">Contract Preview</h2>
      <ul className="text-sm text-gray-700 space-y-1">
        <li><strong>Employee:</strong> {employeeName}</li>
        <li><strong>Function:</strong> {functionTitle}</li>
        <li><strong>Start Date:</strong> {startDate}</li>
        <li><strong>End Date:</strong> {endDate}</li>
        <li><strong>Duration:</strong> {contractDuration} months</li>
        <li><strong>Salary:</strong> €{salaryAmount} / month</li>
        <li><strong>Hours/Week:</strong> {numberOfHoursPerWeek}</li>
        <li><strong>Holiday Days:</strong> {numberOfHolidayDays}</li>
      </ul>
    </div>
  );
};

export default ContractPreviewPanel;
