import { Link } from "react-router-dom";
import "./topbar.css"
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
    const {user, dispatch} = useContext(Context);
    const PF = "http://localhost:5000/images/";

    const handleLogOut = () => {
        dispatch({type: "LOGOUT"});
    }

    return (
        <div className='top' >
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-x-twitter"></i>
                <i className="topIcon fa-brands fa-skype"></i>
                <i className="topIcon fa-brands fa-github"></i>
                <i className="topIcon fa-brands fa-linkedin"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem" ><Link className="link" to='/'>HOME</Link></li>
                    <li className="topListItem" ><Link className="link" to='/general'>GENERAL</Link></li>
                    <li className="topListItem" ><Link className="link" to='/about'>ABOUT</Link></li>
                    <li className="topListItem" ><Link className="link" to='/contact'>CONTACT</Link></li>
                    <li className="topListItem" ><Link className="link" to='/write'>WRITE</Link></li>
                    <li className="topListItem" onClick={handleLogOut} >{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (                
                <Link to="/settings">
                    <img className="topImg" src={PF + user.profilePic} alt=""/>
                </Link>
                ):(
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to='/login'>LOGIN</Link>  |  
                                |  <Link className="link" to='/register'>REGISTER</Link>
                            </li>
                        </ul>
                    )

                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
