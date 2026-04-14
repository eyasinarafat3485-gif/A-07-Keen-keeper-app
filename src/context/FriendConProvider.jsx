import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
export const FriendContext= createContext();

const FriendConProvider = ({children}) => {

     const [callInfo, setCallInfo]= useState([])
        const [textInfo, setTextInfo]= useState([])
        const [videoInfo, setVideoInfo]= useState([])
        
        const handleCall=(curentFriend)=>{
            console.log(curentFriend, 'IDDD');
            const isExistCall= callInfo.find(friend=> friend.id === curentFriend.id);
            if(isExistCall){
                // alert("This fam is called")
                toast.error(`${curentFriend.name} is already called!`)
                return;
            }
            else{
                setCallInfo([...callInfo, curentFriend])
                toast.success(`${curentFriend.name} is call.`)
            }
        }
         const handleText=(curentFriend)=>{
            console.log(curentFriend, 'IDDD');
            const isExistText= textInfo.find(friend=> friend.id === curentFriend.id);
            if(isExistText){
                // alert("This fam is called")
                toast.error(`${curentFriend.name} is already text!`)
            }
            else{
                setTextInfo([...textInfo, curentFriend])
                toast.success(`${curentFriend.name} is now a text.`)
            }
        }
    
        const handleVideo=(curentFriend)=>{
            console.log(curentFriend, 'IDDD');
            const isExistVideo= videoInfo.find(friend=> friend.id === curentFriend.id);
            if(isExistVideo){
                toast.error(`${curentFriend.name} is already video called!`)
            }
            else{
                setVideoInfo([...textInfo, curentFriend])
                toast.success(`${curentFriend.name} is now invited a video call.`)
            }
                
        }
    


    const data={
        handleVideo, handleText, handleCall, 
        callInfo, setCallInfo, textInfo , setTextInfo, videoInfo, setVideoInfo
    }
    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendConProvider;