import React, { use } from 'react';
import { Link } from 'react-router';

const friendsPromise = fetch("/data.json").then((res) => res.json());

const AllFriends = () => {
    const friends = use(friendsPromise);
    // console.log(friends)
    return (
        <div className='bg-slate-50 min-h-screen px-8 font-sans'>
            <div className=' w-[85%] mx-auto'>
            <h2 className='font-bold text-3xl pb-5'>Your Friends</h2>
            </div>
            <div className='pb-15 w-[85%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-5'>
                
                {
                    friends.map((friend, index) => {
                        return (
                            <Link to={`/friendsDetails/${friend.id}`} key={index} className="card bg-base-100 shadow-sm ">
                                <figure>
                                    <img className="w-40 h-40 rounded-full mt-5"
                                        src={friend.picture} />
                                </figure>
                                <div className="card-body text-center">
                                    <h2 className="card-title text-2xl font-bold mx-auto">
                                        {friend.name}
                                    </h2>
                                    <p className="text-xl font-semibold text-gray-500">{friend.days_since_contact}d ago</p>
                                    <div >
                                        {
                                            friend.tags.map((tag, ind) => <div key={ind} className="badge bg-orange-100 rounded-xl text-orange-600 mr-2 p-2 font-semibold mx-auto gap-5 py-4">{tag}</div>)
                                        }
                                    </div>

                                    <span className={`p-2 mt-3 rounded-xl font-medium ${friend.status === 'active' ? 'text-green-600 bg-green-100' :
                                            friend.status === 'inactive' ? 'text-red-600 bg-red-100' :
                                                friend.status === 'overdue' ? 'text-purple-600 bg-purple-100' :
                                                    'text-gray-600 bg-gray-100'}`}>
                                        {friend.status}
                                    </span>

                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllFriends;