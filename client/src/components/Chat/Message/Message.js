import React from 'react';

class ChatMessage extends React.Component {
    render() {
        return (
            /* need to add chat-reply or chat-sent accordigly */
            <div className="container-flex chat-sent">
                {/* Following text will be a message input */}
                <div className="chat-blob">second persons messsage.</div>
            </div>
        );
    };
};

export default ChatMessage;