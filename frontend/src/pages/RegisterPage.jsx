import { useState } from "react";
import { useNavigate } from "react-router";
import FormDataField from "../components/FormField";
import BackToMainButton from "../components/BackToMainButton";

function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((f) => ({ ...f, [id]: value }));
    setErrorMessage("");
  };

  const isValidEmail = () =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.first_name || !formData.last_name) {
      setErrorMessage("First and last name are required");
      return;
    }
    if (!isValidEmail()) {
      setErrorMessage("Invalid email format");
      return;
    }

    console.log("Registered user:", formData);
    navigate("/login"); 
  };

  return (
    <div className="w-full">
      <BackToMainButton className="fixed top-4 left-4 z-50" />
      
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Register</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 sm:gap-5 w-full"
      >
        <FormDataField
          type="text"
          id="first_name"
          value={formData.first_name}
          handleChange={handleChange}
        />
        <FormDataField
          type="text"
          id="last_name"
          value={formData.last_name}
          handleChange={handleChange}
        />
        <FormDataField
          type="email"
          id="email"
          value={formData.email}
          handleChange={handleChange}
        />

        <p className={`text-center text-sm ${errorMessage ? "text-red-600 select-none" : "text-white"}`}>
          {errorMessage}
        </p>

        <button
          type="submit"
          className="w-full bg-pink-400 py-2 px-5 text-white rounded-lg hover:bg-pink-600 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
