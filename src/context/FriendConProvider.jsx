import React, { createContext } from 'react';
export const FriendContext= createContext();

const FriendConProvider = ({children}) => {
    const data={
        name: 'eyasin',
        age: 21
    }
    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendConProvider;