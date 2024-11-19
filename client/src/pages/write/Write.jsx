import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-file-circle-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: 'none'}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell us your story..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button type="submit" className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
