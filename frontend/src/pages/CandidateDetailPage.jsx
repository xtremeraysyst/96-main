import React from 'react';
import { useNavigate } from 'react-router';
import BackToMainButton from '../components/BackToMainButton';
import FormDataField from "../components/FormField";
import { useState } from "react";
import { useNavigate } from "react-router";
import ElninoLogo from "../assets/elnino-logo.jsx";

function CandidateDetailPage() {
  const [user, setUser] = useState({
    bsn: "",
    initials: "",
    prefix: "",
    full_first_name: "",
    gender: "",
    date_of_birth: "",
    marital_status: "",
    postal_code: "",
    house_number: "",
    street: "",
    city: "",
    country: "",
    bank_account_number: "",
    bank_account_name: "",
    birth_country: "",
    nationality: ""
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function isValidBSN() {
    const bsn = user.bsn || "";
    return /^\d{9}$/.test(bsn);
  }

  function isValidPostalCode() {
    const postalCode = user.postal_code || "";
    return /^\d{4}[A-Z]{2}$/.test(postalCode);
  }

  function requiredFields() {
    const required = [
      "bsn",
      "initials", 
      "prefix",
      "full_first_name",
      "gender",
      "date_of_birth",
      "marital_status",
      "postal_code",
      "house_number",
      "street",
      "city",
      "country",
      "bank_account_number",
      "bank_account_name",
      "birth_country",
      "nationality"
    ];

    for (const field of required) {
      if (!user[field] || user[field].toString().trim() === "") {
        return false;
      }
    }
    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!requiredFields()) {
      setErrorMessage("Please fill all required fields.");
      return;
    }
    if (!isValidBSN()) {
      setErrorMessage("Must consist 9 numbers");
      return;
    }
    if (!isValidPostalCode()) {
      setErrorMessage("Invalid format. 4 digits + 2 upper cased letters");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/api/candidates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      const data = await res.json();
      console.log(data);
      
      if (!res.ok) {
        throw new Error(data.detail || "Submission failed");
      }

      console.log("Submission successfull!");
      setErrorMessage("");
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.id]: e.target.value });
  }

  return (
<main className="px-4 py-6">
  <ElninoLogo/>
  <h1 className="text-4xl font-bold mb-8 text-center">Candidate Details</h1>

  <form
    onSubmit={handleSubmit}
    className="mx-auto flex flex-col gap-8 w-full max-w-4xl"
  >
    {/* Personal Info */}
    <section className="rounded-2xl bg-white p-6 shadow-md border">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Personal Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormDataField type="number" id="bsn" value={user.bsn} handleChange={handleChange} />
        <FormDataField type="text" id="initials" value={user.initials} handleChange={handleChange} />
        <FormDataField type="text" id="full_first_name" value={user.full_first_name} handleChange={handleChange} />
        <FormDataField type="date" id="date_of_birth" value={user.date_of_birth} handleChange={handleChange} />

        {/* Prefix */}
        <div className="flex flex-col">
          <label htmlFor="prefix" className="mb-1 font-medium">Prefix</label>
          <select
            id="prefix"
            value={user.prefix}
            onChange={handleChange}
            className="rounded border border-gray-300 bg-white p-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select prefix</option>
            <option value="None">None</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
            <option value="Dr.">Dr.</option>
          </select>
        </div>

        {/* Gender */}
        <div className="flex flex-col">
          <label htmlFor="gender" className="mb-1 font-medium">Gender</label>
          <select
            id="gender"
            value={user.gender}
            onChange={handleChange}
            className="rounded border border-gray-300 bg-white p-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
    </section>

    {/* Address Info */}
    <section className="rounded-2xl bg-white p-6 shadow-md border">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Address</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormDataField type="text" id="street" value={user.street} handleChange={handleChange} />
        <FormDataField type="text" id="house_number" value={user.house_number} handleChange={handleChange} />
        <FormDataField type="text" id="postal_code" value={user.postal_code} handleChange={handleChange} />
        <FormDataField type="text" id="city" value={user.city} handleChange={handleChange} />
        <FormDataField type="text" id="country" value={user.country} handleChange={handleChange} />
      </div>
    </section>

    {/* National Info */}
    <section className="rounded-2xl bg-white p-6 shadow-md border">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Nationality & Birth</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormDataField type="text" id="birth_country" value={user.birth_country} handleChange={handleChange} />
        <FormDataField type="text" id="nationality" value={user.nationality} handleChange={handleChange} />

        {/* Marital Status */}
        <div className="flex flex-col">
          <label htmlFor="marital_status" className="mb-1 font-medium">Marital Status</label>
          <select
            id="marital_status"
            value={user.marital_status}
            onChange={handleChange}
            className="rounded border border-gray-300 bg-white p-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
        </div>
      </div>
    </section>

    {/* Banking Info */}
    <section className="rounded-2xl bg-white p-6 shadow-md border">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Bank Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormDataField type="text" id="bank_account_name" value={user.bank_account_name} handleChange={handleChange} />
        <FormDataField type="text" id="bank_account_number" value={user.bank_account_number} handleChange={handleChange} />
      </div>
    </section>

    {/* Submit */}
    <div className="flex flex-col items-center">
      {errorMessage && (
        <p className="text-sm text-red-600 mb-2">{errorMessage}</p>
      )}
      <button
        type="submit"
        className="rounded-xl bg-pink-500 px-8 py-2 text-white shadow hover:bg-pink-600 transition"
      >
        Submit
      </button>
    </div>
  </form>
</main>


  );
}

function CandidateDetailPage() {
    // ... existing code ...

    return (
        <div className="min-h-screen bg-gray-50 p-4">
            {/* Back button */}
            <div className="mb-6">
                <BackToMainButton />
            </div>
            
            {/* Rest of your existing content */}
            {/* ... existing code ... */}
        </div>
    );
}

export default CandidateDetailPage;