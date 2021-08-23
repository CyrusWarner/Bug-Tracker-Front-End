import React, { useEffect } from 'react';
import {ChatEngine} from 'react-chat-engine'
const Chat = ({currentUser}) => {
    const {firstName, password} = currentUser;
    useEffect(() => {

    }, [])
    return (
        <ChatEngine
        publicKey='113d6731-1044-4dc0-b121-2ebd630da898'
        userName= {firstName}
        userSecret= {password}
        >
        </ChatEngine>
    )
}

export default Chat;