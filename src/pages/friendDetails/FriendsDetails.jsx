import React, { use } from 'react';
import { BiArchive, BiBell, BiMessageSquare, BiPhone, BiVideo } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { useParams } from 'react-router';

const friendsPromise = fetch("/data.json").then((res) => res.json());

const FriendsDetails = () => {

    const friends = use(friendsPromise);
    console.log(friends);

    const { id } = useParams();
    console.log(id)

    const expectedFriend = friends.find(friend => friend.id == id);
    console.log(expectedFriend)
    
    // const [callInfo, setCallInfo]= useState([]);
    
    const handleCallBtn=(id)=>{
        console.log(id)
    }
   

    return (
        <div className='bg-slate-50 min-h-[60vh] px-8 font-sans py-15'>
            <div className='w-[85%] mx-auto flex flex-col md:flex-row gap-6'>

                <div className="w-80 flex flex-col gap-6">
                    {/* Profile Card */}
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center">
                        <div ><img className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4" src={expectedFriend.picture} alt="" /></div>
                        <h2 className="text-xl font-bold text-slate-800">{expectedFriend.name}</h2>

                        <div className="flex flex-col items-center gap-2 mt-2">
                            <span className={`px-3 py-1 mt-3 rounded-xl font-medium ${expectedFriend.status === 'active' ? 'text-green-600 bg-green-100' :
                                expectedFriend.status === 'inactive' ? 'text-red-600 bg-red-100' :
                                    expectedFriend.status === 'overdue' ? 'text-purple-600 bg-purple-100' :
                                        'text-gray-600 bg-gray-100'}`}>
                                {expectedFriend.status}
                            </span>
                            <div >
                                {
                                    expectedFriend.tags.map((tag, ind) => <div key={ind} className="badge bg-orange-100 rounded-xl text-orange-600 mr-2 p-2 font-semibold mx-auto gap-5 py-4">{tag}</div>)
                                }
                            </div>
                        </div>

                        <p className="mt-6 text-slate-500 italic">"{expectedFriend.bio}"</p>
                        <p className="text-xs text-slate-400 mt-2">Preferred: {expectedFriend.email}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2">
                        <button className="flex items-center justify-center gap-2 bg-white p-3 rounded-lg border border-gray-200 text-slate-700 hover:bg-green-50">
                            <BiBell size={18} /> Snooze 2 Weeks
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-white p-3 rounded-lg border border-gray-200 text-slate-700 hover:bg-gray-50">
                            <BiArchive size={18} /> Archive
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-white p-3 rounded-lg border border-gray-200 text-red-500 hover:bg-red-50">
                            <MdDelete size={18} /> Delete
                        </button>
                    </div>
                </div>

                {/* Main Content Section  */}
                <div className="flex-1 flex flex-col gap-6">

                    {/* Top Stats Boxes */}
                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-white px-6 py-10 rounded-xl border border-gray-100 shadow-sm text-center">
                            <h3 className="text-4xl font-bold text-slate-700">{expectedFriend.daysSinceContact}</h3>
                                <span className='text-3xl font-semibold text-gray-500'>{expectedFriend.days_since_contact}</span>
                                <p className="text-slate-400 text-sm mt-1">Days Since Contact</p>                          
                        </div>

                        <div className="bg-white px-6 py-10 rounded-xl border border-gray-100 shadow-sm text-center">                 
                                <span className='text-3xl font-semibold text-gray-500'>{expectedFriend.goal}</span>
                                <p className="text-slate-400 text-sm mt-1">Goal (Days)</p>
                        </div>
                        <div className="bg-white px-6 py-10 rounded-xl border border-gray-100 shadow-sm text-center">
                            <span className='text-3xl font-semibold text-gray-500'>{expectedFriend.next_due_date}</span>
                            <p className="text-slate-400 text-sm mt-1">Next Due</p>
                        </div>
                    </div>

                    {/* Relationship Goal Box */}
                    <div className="bg-white px-6 py-10 rounded-xl border border-gray-100 shadow-sm flex justify-between items-start">
                        <div>
                            <h4 className="text-lg font-bold text-emerald-800">Relationship Goal</h4>
                            <p className="text-slate-500 mt-4">Connect every <span className="font-bold text-slate-800">{expectedFriend.goal} days</span></p>
                        </div>
                        <button className="px-4 py-1 border border-gray-200 rounded text-sm text-slate-600 hover:bg-gray-50 flex items-center gap-1">
                            Edit
                        </button>
                    </div>

                    {/* Quick Check-In Box */}
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-800 mb-6">Quick Check-In</h4>
                        <div className="grid grid-cols-3 gap-4">

                            <button onClick={()=>handleCallBtn(id)} className="flex flex-col items-center justify-center gap-3 p-6 bg-slate-50 rounded-xl border border-transparent cursor-pointer hover:border-emerald-700 transition-all group">
                                <BiPhone size={28} className="text-slate-700 group-hover:text-emerald-600" />
                                <span className="text-slate-600 font-medium">Call</span>
                            </button>

                            <button className="flex flex-col items-center justify-center gap-3 p-6 bg-slate-50 rounded-xl border border-transparent cursor-pointer hover:border-emerald-700 transition-all group">
                                <BiMessageSquare size={28} className="text-slate-700 group-hover:text-emerald-600" />
                                <span className="text-slate-600 font-medium">Text</span>
                            </button>

                            <button className="flex flex-col items-center justify-center gap-3 p-6 bg-slate-50 rounded-xl border border-transparent cursor-pointer hover:border-emerald-700 transition-all group">
                                <BiVideo size={28} className="text-slate-700 group-hover:text-emerald-600" />
                                <span className="text-slate-600 font-medium">Video</span>
                            </button>
                        </div>
                    </div> 

                </div>
            </div>

        </div>
    );
};

export default FriendsDetails;