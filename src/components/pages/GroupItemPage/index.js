import React from "react";
import { Link } from 'react-router-dom'

import './GroupItemPage.css';
import MaineFrame from '../../common/MainFrame';
import MainFrameSeparator from '../../common/MainFrameSeparator';
import NewComment from './NewComment';
import Comment from './Comment';

import forumService from '../../../services/ForumService';

class GroupItemPage extends React.Component {
    constructor() {
        super();

        this.state = { groupItem: { author: {} } };
    }

    async componentDidMount() {
        const groupItem = await forumService.getGroupItemById("");

        this.setState({ groupItem: groupItem });
    }

    render() {
        return (
            <div className="groupItemPage_content">
                <MaineFrame name={this.state.groupItem.itemName}>
                    <div className="groupItemPage_item">
                        <p className="groupItemPage_text">
                            {
                                this.state.groupItem.content
                            }
                        </p>
                        <div className="groupItemPage_author">
                            <p2>Author</p2>
                            <Link to={"/user/" + this.state.groupItem.author.name}>
                                {
                                    this.state.groupItem.author.name
                                }
                            </Link>                         
                        </div>
                    </div>
                </MaineFrame>
                <MaineFrame name="Comments">
                    <div className="groupItemPage_comments">
                        {
                            this.state.groupItem.comments?.map(item => <Comment comment={item} />)
                        }
                    </div>
                </MaineFrame>
                <MaineFrame name="Add Commnet">
                    <div className="groupItemPage_addNewComment">
                        {
                            <NewComment />
                        }
                    </div>
                </MaineFrame>
            </div>
        );
    }
}

export default GroupItemPage;
