import { useState } from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import "../settings/setting.css";

export default function Setting() {
    const [username, setUsername] = useState("Patrick");
    const [email, setEmail] = useState("patrickwayy@gmail.com");
    const [password, setPassword] = useState("");

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            // Assuming you have the user ID
            const userId = 1; // Replace with actual user ID
            await axios.put(`http://localhost:5000/users/${userId}`, {
                username,
                email,
                password
            });
            alert("Account updated successfully!");
        } catch (error) {
            console.error("Error updating account", error);
        }
    };

    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingUpdateTitle">Update Your Account</span>
                    <span className="settingDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleUpdate}>
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                            src="https://cdn.pixabay.com/photo/2017/12/01/08/02/paint-2990357_1280.jpg"
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                    </div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="settingsSubmit" type="submit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
}
