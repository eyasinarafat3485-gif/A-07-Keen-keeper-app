import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendConProvider';

const Timeline = () => {
    const { callInfo, textInfo, videoInfo } = useContext(FriendContext);
    console.log( callInfo, textInfo, videoInfo,'call storege context');

    return (
        <div className='min-h-[60vh]  w-[85%] mx-auto'>
            Timeline pagess
        </div>
    );
};

export default Timeline;