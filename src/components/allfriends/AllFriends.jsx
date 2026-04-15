import React, { Suspense, use } from 'react';
import { Link } from 'react-router';

// 1. Fetching logic with 1s artificial delay
const friendsPromise = fetch("/data.json")
    .then((res) => res.json())
    .then(async (data) => {
        // Force 1 second wait (1000ms)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return data;
    });

const FriendsList = () => {
    const friends = use(friendsPromise);

    return (
        <div className='pb-15 w-[95%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-5'>
            {friends.map((friend, index) => (
                <Link to={`/friendsDetails/${friend.id}`} key={index} className="card bg-base-100 shadow-sm hover:shadow-xl">
                    <figure>
                        <img className="w-40 h-40 rounded-full mt-5" src={friend.picture} alt={friend.name} />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="card-title text-2xl font-bold mx-auto">{friend.name}</h2>
                        <p className="text-xl font-semibold text-gray-500">{friend.days_since_contact}d ago</p>
                        <div className="flex flex-wrap justify-center gap-2">
                            {friend.tags.map((tag, ind) => (
                                <div key={ind} className="badge border border-orange-600 bg-orange-100 rounded-xl text-orange-600 p-2 font-semibold py-4">
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <span className={`p-2 mt-3 rounded-xl font-medium ${
                            friend.status === 'active' ? 'text-green-600 bg-green-100 border-2 border-green-600' :
                            friend.status === 'inactive' ? 'text-red-600 bg-red-100 border-2 border-red-600' :
                            friend.status === 'overdue' ? 'text-yellow-600 border-2 border-yellow-600 bg-yellow-100' :
                            'text-gray-600 bg-gray-100'}`}>
                            {friend.status}
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

const AllFriends = () => {
    return (
        <div className='bg-slate-50 min-h-screen px-8 font-sans'>
            <div className='w-[95%] md:w-[85%] mx-auto'>
                <h2 className='font-bold text-3xl py-5'>Your Friends</h2>
            </div>

            <Suspense fallback={
                <div className="flex flex-col justify-center items-center min-h-[50vh] gap-4">
                    <span className="loading loading-spinner loading-lg text-orange-600"></span>
                    <p className="text-gray-500 font-medium">Loading your friends...</p>
                </div>
            }>
                <FriendsList />
            </Suspense>
        </div>
    );
};

export default AllFriends;