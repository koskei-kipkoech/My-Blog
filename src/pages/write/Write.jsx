import "../write/write.css"

export default function Write() {
    return (
        <div className="writeImg">
            <img className="" src="https://images.pexels.com/photos/1367105/pexels-photo-1367105.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
            <form className="write">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i class="writeIcon fa-solid fa-file-circle-plus"></i>
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
