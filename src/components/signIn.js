import React, { useState } from "react";
import Popup from "./popup";
export default function SignIn() {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className="signIn-btn" type="submit" onClick={togglePopup}>
                Sign in
            </button>
            {isOpen && (
                <Popup
                    content={
                        <div className="signIn">
                            <p className="title">Register with</p>
                            <div className="buttons">
                                <button className="btn-f">f</button>
                                <button className="btn">🐦</button>
                                <button className="btn-g">G</button>
                                <button className="btn">🍎</button>
                                <button className="btn-y">Y!</button>
                            </div>
                            <p className="title">-------or with imgur-------</p>
                            <div className="inputs">
                                <input placeholder="Username" className="input-1" />
                                <input placeholder="E-mail" className="input-1" />
                                <input placeholder="Password" className="input-1" />
                                <input placeholder="Re-type Password" className="input-1" />
                                <input placeholder="mobile number" className="input-1" />
                            </div>
                            <button className="nextBtn">Next</button>
                        </div>
                    }
                    handleClose={togglePopup}
                />
            )}
        </>
    );
}
