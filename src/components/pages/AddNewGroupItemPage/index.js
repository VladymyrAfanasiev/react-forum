import { React, useState } from "react";
import { useParams } from "react-router-dom"

import MainFrame from '../../common/MainFrame';

import './AddNewGroupItemPage.css';

function AddNewGroupItemPage() {
    const params = useParams();
    const [isDataFilled, setIsDataFilled] = useState(false);
    
    function handleDataChange() {
        const itemNameText = document.getElementsByClassName("addNewGroupItemPage_itemName")[0].value;
        if (itemNameText == "") {
            setIsDataFilled(false);
            return;
        }

        const contentText = document.getElementsByClassName("addNewGroupItemPage_itemContent")[0].value;
        if (contentText == "") {
            setIsDataFilled(false);
            return;
        }

        setIsDataFilled(true);
    }

    return (
        <div className="addNewGroupItemPage_container">
            <MainFrame name={"Add new item to " + params.id}>
                <div className="addNewGroupItemPage_content">
                    <label>
                        <b>Item name</b>
                    </label>
                    <input className="addNewGroupItemPage_itemName" type="text" placeholder="Enter item name" onChange={handleDataChange}></input>
                    <label>
                        <b>Content</b>
                    </label>
                    <textarea className="addNewGroupItemPage_itemContent" type="text" placeholder="Enter a content" onChange={handleDataChange}></textarea>

                    <div className="addNewGroupItemPage_buttonContainer">
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

export default AddNewGroupItemPage;