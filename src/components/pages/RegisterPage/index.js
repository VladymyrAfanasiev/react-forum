import { React, useState } from "react";

import "./RegisterPage.css";

function RegisterPage() {
    const [userImage, setUserImage] = useState(undefined);

    function imageSelectionHandler(e) {
        setUserImage(e.target.files[0]);

        const imagePreview = document.getElementsByClassName("registerPage_imagePreview")[0];

        e.target.files.length == 0 ? imagePreview.src = "/img/anon.png" : imagePreview.src = URL.createObjectURL(e.target.files[0]);
    }

    return (
        <div className="registerPage_container">
            <label>
                <b>Image</b>
            </label>
            <img className="registerPage_imagePreview" src="/img/anon.png" alt="" />
            <input type="file" onChange={imageSelectionHandler}></input>
            <label>
                <b>Username</b>
            </label>
            <input type="text" placeholder="Enter Username"></input>
            <label>
                <b>Password</b>
            </label>
            <input type="text" placeholder="Enter Password"></input>
            <label>
                <b>Confirm Password</b>
            </label>
            <input type="text" placeholder="Enter Password"></input>
            <label>
                <b>Email Address</b>
            </label>
            <input type="text" placeholder="Enter Email"></input>

            <div className="registerPage_buttonContainer">
                <button className="root_button">
                    Register
                </button>
            </div>
        </div>
    );
}

export default RegisterPage;