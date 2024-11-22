import {  useContext, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import "../settings/setting.css";
import { Context } from "../../context/Context";

export default function Setting() {
    const {user , dispatch} = useContext(Context)
    const [file , setFile]= useState(null)
    const [username , setUsername]= useState("")
    const [email , setEmail]= useState("")
    const [password , setPassword]= useState("")
    const [sucess , setSucess]= useState(false)
    const PF =  "http://localhost:5000/images"

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "UPDATE_START"})
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        }
        if(file){
            const data = new FormData();
            const filename =  Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try{
                await axios.post("/upload", data)
            }catch(err){}
        }
        try{
            const res = await axios.put("/users/" + user._id, updatedUser);
            setSucess(true);
            dispatch({type: "UPDATE_SUCESS", payload: res.data});
        }catch(err){
            dispatch({type: "UPDATE_FAILED"})
        }
    };

    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingUpdateTitle">Update Your Account</span>
                    <span className="settingDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])}/>
                    </div>
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder={user.username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder={user.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="settingsSubmit" type="submit">Update</button>
                    {sucess && <span style={{color:"green", textAlign:"center",marginTop:"20px"}}>Profile Has Been Updated...</span>}
                </form>
            </div>
            <Sidebar />
        </div>
    );
}
