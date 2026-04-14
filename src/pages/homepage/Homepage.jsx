import React from 'react';
import FriendDashboard from '../../components/homepage/friendsDashboard';
import Footer from '../../components/homepage/footer';
import AllFriends from '../../components/allfriends/AllFriends';



const Homepage = () => {
    return (
        <div>
            <FriendDashboard />
            <AllFriends />
            
        </div>
    );
};

export default Homepage;