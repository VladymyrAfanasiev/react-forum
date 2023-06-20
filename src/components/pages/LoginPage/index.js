import { React, useState } from 'react';
import { useNavigate  } from "react-router-dom";

import eventEmitter from '../../../events/EventEmitter';
import authService from '../../../services/AuthService';

import './LoginPage.css';

function LoginPage() {
    const navigate = useNavigate();
    const [isLoginFormEmpty, setIsLoginFormEmpty] = useState(true);

    function handleLoginFormChange(e) {
        setIsLoginFormEmpty(e.target.value == "" ? true : false);
    }

    const loginClick = async function () {
        const userName = document.getElementById("loginPage_userName").value;
        const success = await authService.login(userName);
        if (success) {
            eventEmitter.emit('login');
            navigate("/");
        }
    }

    return (
        <div className="loginPage_container">
            <label>
                <b>Username</b>
            </label>
            <input id="loginPage_userName" type="text" placeholder="Enter Username" onChange={handleLoginFormChange}></input>
            <label>
                <b>Password</b>
            </label>
            <input type="text" placeholder="Enter Password"></input>
            <div className="loginPage_buttonContainer">
                {
                    isLoginFormEmpty ? (
                        <button className="root_button root_button_disabled" onClick={loginClick}>Login</button>
                    ) : (
                        <button className="root_button" onClick={loginClick}>Login</button>
                    )
                }
            </div>
        </div>
    );
}

export default LoginPage;