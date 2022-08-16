import React, { useState } from "react";
import { FaCommentAlt, FaThumbsUp, FaRegEye } from "react-icons/fa";
export default function Counter() {
    const [click, setClick] = useState(197);
    const [comment, setComment] = useState(0);
    const [views, setViews] = useState(1843);
    return (
        <div className="counter-btn">
            <div className="count-div">
                <FaThumbsUp onClick={(e) => setClick(click + 1)} /> {click}
            </div>
            <div className="count-div">
                <FaCommentAlt onClick={(e) => setComment(comment + 1)} /> {comment}
            </div>
            <div className="count-div">
                <FaRegEye onClick={(e) => setViews(views + 1)} /> {views}
            </div>
        </div>
    );
}
