import React from 'react';
import Segment from '../../../containers/Segment';
import MessageBlob from '../MessageBlob/MessageBlob';
import ChatFooter from '../Footer/Footer';
import ChatHeader from '../Header/Header';

class MainContent extends React.Component {
    render() {
        return (
            <div className="mainContent">
                <div className="container-flex f-d-column vh">
                    <Segment>
                        <ChatHeader />
                    </Segment>
                    <div className="chat-container padding-sm">
                        {/* will take an array containing chat objects*/}
                        {/* To list the messages */}
                        <MessageBlob />
                    </div>
                    <div className="spacer"></div>
                    <div className="input-container container-flex padding-sm">
                        <div className="a-s-center spacer">
                            <ChatFooter />
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default MainContent;