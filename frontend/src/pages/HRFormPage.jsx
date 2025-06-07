import React, { useState } from 'react';
import ContractTypeSelect from '../components/ContractTypeSelect';
import Button from '../components/Button';

const HRFormPage = () => {
  const [contractType, setContractType] = useState('');
  const [candidateName, setCandidateName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/submit-contract', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: candidateName, contractType }),
    })
      .then(res => res.json())
      .then(data => {
        alert('Contract submitted!');
        // optionally reset form here
      })
      .catch(err => console.error('Submission failed:', err));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">HR Contract Form</h2>

      <label className="block mb-1 font-medium">Candidate Name</label>
      <input
        type="text"
        placeholder="Candidate Name"
        className="border px-3 py-2 rounded-sm w-full mb-4"
        value={candidateName}
        onChange={e => setCandidateName(e.target.value)}
        required
      />

      <ContractTypeSelect value={contractType} onChange={setContractType} />

      <Button type="submit" size="md">
        Submit
      </Button>
    </form>
  );
};

export default HRFormPage;
