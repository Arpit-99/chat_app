import React from 'react';
import ChatInputBox from '../InputBox/InputBox';


class ChatForm extends React.Component {
    render() {
        return (
            <form className="container-flex">
                <ChatInputBox />
                <i class="fas fa-paper-plane fa-2x send-button"></i>
            </form>
        );
    };
};

export default ChatForm;