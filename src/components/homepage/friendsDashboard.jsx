import React from 'react';
import { FaPlus } from 'react-icons/fa';

const FriendDashboard = () => {
    const stats = [
        { label: 'Total Friends', value: 12 },
        { label: 'Active', value: 6 },
        { label: 'Need Attention', value: 6 },
        { label: 'Interactions This Month', value: 15 },
    ];

    return (
        <div className="bg-slate-50 min-h-screen p-8 font-sans py-15">
            <div className="text-center w-[85%] mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                    Friends to keep close in your life
                </h1>

                <p className="text-slate-500 max-w-2xl mx-auto mb-8 leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>

                <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-6 py-2.5 rounded-md flex items-center gap-2 mx-auto transition-colors duration-200 font-medium">
                    <FaPlus /> Add a Friend
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center space-y-2"
                        >
                            <span className="text-4xl font-bold text-orange-600">
                                {stat.value}
                            </span>
                            <span className="text-slate-500 font-medium tracking-tight">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-15 border-t border-slate-200 w-full"></div>
            </div>
        </div>
    );
};

export default FriendDashboard;