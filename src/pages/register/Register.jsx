import { Link } from "react-router-dom"
import "../register/register.css"

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input type="username" className="registerInput" placeholder="Enter Your Username.." required />
                <label>Email</label>
                <input type="email" className="registerInput" placeholder="Enter Your Email.." required />
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter Your Password" required />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton"><Link className="link" to="/login">LOGIN</Link></button>
        </div>
    )
}
