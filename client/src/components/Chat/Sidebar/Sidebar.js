import React from 'react';
import Segment from '../../../containers/Segment';
import SidebarHeader from './Header/Header';
import ChatUserList from '../UserList/UserList';


class Sidebar extends React.Component {
    render() {
        return (
            <div className="sideBar">
                <div className="container-flex f-d-column vh">
                    <Segment>
                        <SidebarHeader />
                    </Segment>
                    <ChatUserList />
                </div>
            </div>

        );
    };
};

export default Sidebar;