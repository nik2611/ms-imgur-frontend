import React, { useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import Popup from "./popup";
import Upload from "./uploadImage";
function NewPost() {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className="newPost-btn" onClick={togglePopup}>
                <BsFillPlusSquareFill></BsFillPlusSquareFill> New Post
            </button>
            {isOpen && (
                <Popup
                    content={
                        <>
                            <b>Upload your memories...</b>
                            <Upload />
                        </>
                    }
                    handleClose={togglePopup}
                />
            )}
        </>
    );
}

export default NewPost;
