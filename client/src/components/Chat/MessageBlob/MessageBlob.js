import React from 'react';

class MessageBlob extends React.Component {
    render() {
        return (
            /* need to add j-c-flex-start or j-c-flex-end accordigly */
            <div className="container-flex j-c-flex-end">
                {/* Following text will be a message input */}
                <div className="chat-blob">second persons messsage.</div>
            </div>
        );
    };
};

export default MessageBlob;