import { Link } from "react-router-dom";

import './Group.css'

import GroupItem from './GroupItem';

function Group(props) {
    return (
        <div className="mainGroup">
            <h2 className="mainGroupName">
                <Link to={'/group/' + props.group.groupName}>
                    {
                        props.group.groupName
                    }
                </Link>
                <Link title="Add new group item" className="addNewGroup_a_button" to={'/addNewGroupItem/' + props.group.groupName}></Link>
            </h2>
            <div className="groupItemsContainer">
                <ol>
                    {
                        props.simpleView ?
                            props.group.groupItems.slice(0, 3).map(groupItem => <li><GroupItem groupItem={groupItem} /></li>) :
                            props.group.groupItems.map(groupItem => <li><GroupItem groupItem={groupItem} /></li>)
                    }
                    {
                        props.simpleView && props.group.groupItems.length > 3 ? (
                            <li className="groupItemsContainer_openMove">
                                <Link className="root_a_button" to={'/group/' + props.group.groupName}>Open more items...</Link>
                            </li>
                        ) : (
                            <li />
                        ) 
                    }
                </ol>
            </div>
        </div>
    );
}

export default Group;