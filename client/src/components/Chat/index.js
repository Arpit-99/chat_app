import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import MainContent from './MainContent/MaintContent';

class Chat extends React.Component {
    render() {
        return (
            <div className="container-grid">
                <Sidebar />
                <MainContent />
            </div>
        )
    }
}

export default Chat;