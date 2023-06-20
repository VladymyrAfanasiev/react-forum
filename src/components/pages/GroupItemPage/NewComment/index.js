import React, { useState, useEffect } from 'react';
import { useNavigate  } from "react-router-dom";

import "./NewComment.css";

import authService from '../../../../services/AuthService';

function NewComment() {
    const navigate = useNavigate();
    const [isNewCommentEmpty, setIsNewCommentEmpty] = useState(true);

    function handleNewCommentChange(e) {
        setIsNewCommentEmpty(e.target.value == "" ? true : false);
    }
    
    const addNewCommentClicked = async function () {
        const authenticationInfo = await authService.getAuthenticationInfo();
        if (!authenticationInfo.isAuthenticated) {
            navigate('/login');
        }
    }

    return (
        <div className="newComment_content">
            <div className="newComment_text">
                <textarea type="text" placeholder="Enter a comment" onChange={handleNewCommentChange}></textarea>
            </div>
            <div className="newComment_sendButton">
                {
                    isNewCommentEmpty ? (
                        <button className="root_button root_button_disabled">Send</button>
                    ) : (
                        <button className="root_button" onClick={addNewCommentClicked}>Send</button>
                    )
                }
            </div>
        </div>
    );
}

export default NewComment;