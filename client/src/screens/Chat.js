import React from 'react';
import Sidebar from '../components/Chat/Sidebar/Sidebar';
import MainContent from '../components/Chat/MainContent/MaintContent';

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