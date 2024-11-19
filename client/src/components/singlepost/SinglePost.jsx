import "./singlepost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Hello new begening 
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-sharp-duotone fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="singePostInfo">
                    <span className="singlePostAuthor">Author: <b> Patrick </b></span>
                    <span className="singlePostDate">1 hour Ago</span>
                </div>
                <p className="singlePostDesc">
                    Sport News are widely distributed and available on all platforms and ensure that you dont miss on all sports events and upcoming ones. Sport News are widely distributed and available on all platforms and ensure that you dont miss on all sports events and upcoming ones. Sport News are widely distributed and available on all platforms and ensure that you dont miss on all sports events and upcoming ones.                     Sport News are widely distributed and available on all platforms and ensure that you dont miss on all sports events and upcoming ones. Sport News are widely distributed and available on all platforms and ensure that you dont miss on all sports events and upcoming ones. Sport News are widely distributed and available on all platforms and ensure that you dont miss on all sports events and upcoming ones.
                    Sport News are widely distributed and available on all platforms and ensure that you dont miss on all sports events and upcoming ones. Sport News are widely distributed and available on all platforms and ensure that you dont miss on all sports events and upcoming ones. Sport News are widely distributed and available on all platforms and ensure that you dont miss on all sports events and upcoming ones.

                </p>
            </div>
        </div>
    )
}
