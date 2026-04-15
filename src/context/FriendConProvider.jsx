import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
export const FriendContext = createContext();

const FriendConProvider = ({ children }) => {

    const [callInfo, setCallInfo] = useState([])
    const [textInfo, setTextInfo] = useState([])
    const [videoInfo, setVideoInfo] = useState([])

    const handleCall = (curentFriend) => {
        setCallInfo([...callInfo, curentFriend]);
        toast.success(`${curentFriend.name} added to a call again!`);
    };
    const handleText = (curentFriend) => {
        setTextInfo([...textInfo, curentFriend]);
        toast.success(`${curentFriend.name} added to a text again!`);
    };
    const handleVideo = (curentFriend) => {
        setVideoInfo([...videoInfo, curentFriend]);
        toast.success(`${curentFriend.name} added to a video call again!`);
    };

    const data = {
        handleVideo, handleText, handleCall,
        callInfo, setCallInfo, textInfo, setTextInfo, videoInfo, setVideoInfo
    }
    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendConProvider;