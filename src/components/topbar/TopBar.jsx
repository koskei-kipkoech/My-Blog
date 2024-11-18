import "./topbar.css"

export default function TopBar() {
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
                    <li className="topListItem" >HOME</li>
                    <li className="topListItem" >ABOUT</li>
                    <li className="topListItem" >CONTACTS</li>
                    <li className="topListItem" >WRITE</li>
                    <li className="topListItem" >LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src="https://cdn.pixabay.com/photo/2017/12/01/08/02/paint-2990357_1280.jpg" alt=""/>
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
