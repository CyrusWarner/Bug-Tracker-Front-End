import React, { useEffect } from 'react';
import {ChatEngine} from 'react-chat-engine'
const Chat = ({currentUser}) => {
    const {firstName, password} = currentUser;
    useEffect(() => {

    }, [])
    return (
        <ChatEngine
        publicKey='f7aee748-649c-43a6-9991-12f851edb018'
        userName= {firstName}
        userSecret= {password}
        >
        </ChatEngine>
    )
}

export default Chat;