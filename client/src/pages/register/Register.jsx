import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../register/register.css";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            // Make a POST request to add a new user
            await axios.post("http://localhost:5000/users", {
                username,
                email,
                password
            });
            alert("Registration successful!");
            navigate("/login");
        } catch (error) {
            console.error("Error registering user", error);
        }
    };

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleRegister}>
                <label>Username</label>
                <input
                    type="text"
                    className="registerInput"
                    placeholder="Enter Your Username.."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label>Email</label>
                <input
                    type="email"
                    className="registerInput"
                    placeholder="Enter Your Email.."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Password</label>
                <input
                    type="password"
                    className="registerInput"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="registerButton" type="submit">Register</button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login">LOGIN</Link>
            </button>
        </div>
    );
}
