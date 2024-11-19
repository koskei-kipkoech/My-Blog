import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../login/login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Fetch users and check credentials
            const res = await axios.get("http://localhost:5000/users");
            const user = res.data.find(
                (user) => user.email === email && user.password === password
            );
            if (user) {
                alert("Login successful!");
                navigate("/settings");
            } else {
                alert("Invalid email or password");
            }
        } catch (error) {
            console.error("Error logging in", error);
        }
    };

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleLogin}>
                <label>Email</label>
                <input
                    type="email"
                    className="loginInput"
                    placeholder="Enter Your Email.."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Password</label>
                <input
                    type="password"
                    className="loginInput"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="loginButton" type="submit">Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">Register</Link>
            </button>
        </div>
    );
}
