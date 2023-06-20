import { React, useState } from "react";

import MainFrame from '../../common/MainFrame';

import './RequestCreateNewGroupPage.css';

function RequestCreateNewGroupPage() {
    const [isDataFilled, setIsDataFilled] = useState(false);
    
    function handleDataChange() {
        const itemNameText = document.getElementById("requestCreateNewGroupPage_name").value;
        if (itemNameText == "") {
            setIsDataFilled(false);
            return;
        }

        setIsDataFilled(true);
    }

    return (
        <div className="requestCreateNewGroupPage_container">
            <MainFrame name={"Request to add a new group"}>
                <div className="requestCreateNewGroupPage_content">
                    <label>
                        <b>Name</b>
                    </label>
                    <input id="requestCreateNewGroupPage_name" type="text" placeholder="Enter group name" onChange={handleDataChange}></input>
                    <label>
                        <b>Description</b>
                    </label>
                    <input type="text" placeholder="Enter group description" onChange={handleDataChange}></input>


                    <div className="requestCreateNewGroupPage_buttonContainer">
                        {
                            isDataFilled ? (
                                <button className="root_button">Send</button>
                            ) : (
                                <button className="root_button root_button_disabled">Send</button>
                            )
                        }
                        
                    </div>
                </div>
            </MainFrame>
        </div>
    );
}

export default RequestCreateNewGroupPage;