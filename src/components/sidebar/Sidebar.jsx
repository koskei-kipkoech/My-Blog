import "./sidebar.css"

export default function Sidebar() {
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
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
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
