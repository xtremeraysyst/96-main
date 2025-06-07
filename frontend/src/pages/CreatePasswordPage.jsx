import { useState } from "react";
import FormDataField from "../components/FormField";
import { useNavigate ,useParams} from "react-router";

function CreatePasswordPage() {
    const { token } = useParams();
    const [user, setUser] = useState({
       
        password: "",
        confirmPassword: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
        if (!validateConfirmPassword()) {
            setErrorMessage("Passwords don't match");
            return;
        }
        if (!validatePassword()) {
            setErrorMessage("Password must be 5 characters long and contain an Uppercase character");
            return;
        }
        try {
            const res = await fetch("http://127.0.0.1:8000/api/setup-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    token,
                    password: user.password,
                    confirm_password: user.confirmPassword
                })
            });

            const data = await res.json();
            console.log(data)
            if (!res.ok) {
                throw new Error(data.detail || "Login failed");
            }

            localStorage.setItem("token", data.access_token);
            setErrorMessage("");
            navigate("/login");
        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    function handleChange(e) {
        setUser({ ...user, [e.target.id]: e.target.value });
    }
    function validateConfirmPassword() {
        return user.password === user.confirmPassword;
    }

    function validatePassword() {
        const hasMinLength = user.password.length >= 5;
        const hasUpperCase = new RegExp(/[A-Z]/).test(user.password);
        return hasMinLength && hasUpperCase;
    }

    return (
        <main>
            <h1 className={"text-3xl font-bold mb-6"}>Create Password</h1>
            <form className="flex flex-col items-center justify-center gap-6 px-4 w-full max-w-md" onSubmit={(e) => handleSubmit(e)}>
                <FormDataField type={"password"} id="password" value={user.password} handleChange={(e) => handleChange(e)} />
                <FormDataField type={"confirm_password"} id="confirm_password" value={user.confirmPassword} handleChange={(e) => handleChange(e)} />
                <p className={`select-none ${errorMessage === "" ? 'text-white' : 'text-red-00'}`}>{errorMessage}</p>
                <button type="submit" className="font-sans bg-pink-400 py-2 px-5 rounded-xs hover:bg-pink-600 hover:text-white cursor-pointer hover:scale-x-105 transition-all">Login</button>
            </form>
        </main>

    );
}

export default CreatePasswordPage;