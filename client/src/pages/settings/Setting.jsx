import Sidebar from "../../components/sidebar/Sidebar"
import "./setting.css"

export default function Setting() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingUpdateTitle">Update Your Account</span>
                    <span className="settingDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://cdn.pixabay.com/photo/2017/12/01/08/02/paint-2990357_1280.jpg" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:'none'}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Patrick" />
                    <label>Email</label>
                    <input type="email" placeholder="patrickwayy@gmail.com" />
                    <label>Password</label>
                    <input type="paassword"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
