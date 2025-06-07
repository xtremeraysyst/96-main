import React from "react";

function ContractTypeSelect({ value, onChange }) {
  const options = ["Renewable", "Indefinite", "Fixed-Term"];

  return (
    <div className="py-4 px-4 sm:px-0 rounded-md mb-4">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full sm:max-w-xs p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 bg-white"
      >
        <option value="">Select a contract type</option>
        {options.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ContractTypeSelect;
