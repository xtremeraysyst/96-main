import { useState } from "react";
import FormDataField from "../components/FormField";
import { useNavigate } from "react-router";
import { prodURL } from "../utils/urls.js";

function LoginPage() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
        if (!isValidPassword()) {
            setErrorMessage("Invalid email or password");
            return;
        }
        if (!isValidEmail()) {
            setErrorMessage("Invalid email or password");
            return;
        }
        try {
            const res = await fetch("http://127.0.0.1:8001/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: user.email,
                    password: user.password
                })
            });

            const data = await res.json();
            console.log(data)
            if (!res.ok) {
                throw new Error(data.detail || "Login failed");
            }
            
            console.log("Login successfull!")
            localStorage.setItem("token", data.access_token);
            setErrorMessage(""); 
            navigate("/");
        } catch (error) {
            setErrorMessage(error.message);
        }
    }



    function handleChange(e) {
        // console.log(e.target.id);
        setUser({ ...user, [e.target.id]: e.target.value });
        // console.log(user);
    }
    function isValidEmail() {
        //Regex to check a single string that has @, has no spaces and have a .
        const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        return regex.test(user.email);
    }

    function isValidPassword() {
        const hasMinLength = user.password.length >= 5;
        const hasUpperCase = new RegExp(/[A-Z]/).test(user.password);
        return hasMinLength && hasUpperCase;
    }

    return (
        <main>
            <h1 className={"text-3xl font-bold mb-6"}>Login</h1>
            <form className="flex flex-col items-center justify-center gap-6 px-4 w-full max-w-md" onSubmit={(e) => handleSubmit(e)}>
                <FormDataField type={"email"} id="email" value={user.email} handleChange={(e) => handleChange(e)} />
                <FormDataField type={"password"} id="password" value={user.password} handleChange={(e) => handleChange(e)} />
                <p className={`select-none ${errorMessage === "" ? 'text-white' : 'text-red-600'}`}>{errorMessage}</p>
                <button type="submit" className="font-sans bg-pink-400 py-2 px-5 rounded-xs hover:bg-pink-600 hover:text-white cursor-pointer hover:scale-x-105 transition-all">Login</button>
            </form>
        </main>
    );
}

export default LoginPage;