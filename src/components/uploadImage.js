import React, { useState } from "react";

function Upload() {
    const [imgfile, uploading] = useState([]);
    console.log("Image FIles", imgfile);
    const imgFilehandler = (e) => {
        if (e.target.files.length !== 0) {
            uploading((imgfile) => [
                ...imgfile,
                URL.createObjectURL(e.target.files[0])
            ]);
        }
    };
    return (
        <div className="Upload">
            <div>
                <center>
                    <h5>Upload</h5>
                    <input type="file" onChange={imgFilehandler} />
                    <hr />
                    <h5>Preview</h5>
                    {imgfile.map((elem) => {
                        return (
                            <>
                                <span key={elem}>
                                    <img src={elem} height="200" width="200" alt="med1" />
                                </span>
                            </>
                        );
                    })}
                </center>
            </div>
        </div>
    );
}
export default Upload;
