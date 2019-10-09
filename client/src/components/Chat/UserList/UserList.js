import React from 'react';
import logo from '../../../images/logo192.png'

class User extends React.Component {
    render() {
        return (
            <div className="list-item container-flex padding-sm">
                <div className="a-s-center" style={{ borderRadius: "50%" }}>
                    <img src={logo} alt="icon" style={{ width: "50px", overflow: "hidden" }}></img>
                </div>
                <div className="a-s-center" style={{ flexGrow: 1 }}>
                    <div className="padding-sm">John Doe</div>
                    <div className="info-text padding-sm">Last Seen 1min ago</div>
                </div>
            </div>
        );
    };
};

class ChatUserList extends React.Component {
    render() {
        return (
            <div className="list">
                {/* Repeat */}
                <User />
            </div>
        );
    };
};

export default ChatUserList;