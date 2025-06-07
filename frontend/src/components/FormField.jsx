function FormDataField({ type, id, value, handleChange }) {
    const labels = new Map();
    labels.set("email", { label: "Email:", placeholder: "Jhon@gmail.com" });
    labels.set("password", { label: "Password:", placeholder: "Jhon123!" });
    labels.set("confirm_password", { label: "Confirm Password:", placeholder: "Jhon123!" });
    labels.set("first_name", { label: "First Name", placeholder: "John" });
    labels.set("last_name", { label: "Last Name", placeholder: "Doe" });
    labels.set("employee_number", { label: "employee phone number", placeholder: ""});
    labels.set("bsn", { label: "BSN", placeholder: "123456789" });
    labels.set("initials", { label: "Initials", placeholder: "J.D." });
    labels.set("prefix", { label: "Prefix", placeholder: "Mr./Ms." });
    labels.set("full_first_name", { label: "Full First Name", placeholder: "John" });
    labels.set("gender", { label: "Gender", placeholder: "Male/Female" });
    labels.set("date_of_birth", { label: "Date of Birth", placeholder: "YYYY-MM-DD" });
    labels.set("marital_status", { label: "Marital Status", placeholder: "Married/Single" });
    labels.set("postal_code", { label: "Postal Code", placeholder: "1234AA" });
    labels.set("house_number", { label: "House Number", placeholder: "12B" });
    labels.set("street", { label: "Street", placeholder: "Main Street" });
    labels.set("city", { label: "City", placeholder: "New York" });
    labels.set("country", { label: "Country", placeholder: "USA" });
    labels.set("bank_account_number", { label: "Bank Account Number", placeholder: "NL12BANK3456789012" });
    labels.set("bank_account_name", { label: "Bank Account Name", placeholder: "John Doe" });
    labels.set("birth_country", { label: "Birth Country", placeholder: "USA" });
    labels.set("nationality", { label: "Nationality", placeholder: "American" });


    const { label, placeholder } = labels.get(id);

    return (
        <div className="flex flex-col w-full">
            <label htmlFor={id} className="select-none">{label}</label>
            <input
                className="border-gray-900 border p-3 rounded-sm appearance-none w-full"
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                required={true}
                autoComplete={"off"}
                onChange={(e) => handleChange(e)} />
        </div>
    );
}

export default FormDataField;