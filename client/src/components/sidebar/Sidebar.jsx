import { useEffect, useState } from "react"
import "../sidebar/sidebar.css"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Sidebar() {
    const [cats, setCat] = useState([])

    useEffect(() =>{
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCat(res.data)
        };
        getCats();
    },[])

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://cdn.pixabay.com/photo/2017/12/01/08/02/paint-2990357_1280.jpg" alt="" />
                <p>I'M Patrick Kipkoech a passionate UI/UX developer </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((ca) => (
                        <Link to={`/?cat=${ca.name}`} className="link">
                            <li className="sidebarListItem">{ca.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW ME</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-x-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-skype"></i>
                    <i className="sidebarIcon fa-brands fa-github"></i>
                    <i className="sidebarIcon fa-brands fa-linkedin"></i>
                </div>
            </div>
        </div>
    )
}