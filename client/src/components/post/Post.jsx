import "../post/post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Hello welcome Sports </span>
                <hr />
                <span className="postDate">1hr Ago</span>
            </div>
            <p className="postDesc">
                Sport News are widely distributed and available on all platforms and ensure that you dont miss on all sports eventsand upcoming ones. Sport News are widely distributed and available on all platforms and ensure that you dont miss on all sports eventsand upcoming ones. Sport News are widely distributed and available on all platforms and ensure that you dont miss on all sports eventsand upcoming ones.                 Sport News are widely distributed and available on all platforms and ensure that you dont miss on all sports eventsand upcoming ones
            </p>
        </div>
    )
}