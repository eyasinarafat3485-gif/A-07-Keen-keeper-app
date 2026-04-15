import React, { useContext, useState } from 'react';
import { FriendContext } from '../../context/FriendConProvider';

const Timeline = () => {
    const { callInfo, textInfo, videoInfo } = useContext(FriendContext);
    const [sorting, setSorting] = useState("All");

    const allHistoryRaw = [
        ...(callInfo || []).map(item => ({ ...item, type: 'Call' })),
        ...(textInfo || []).map(item => ({ ...item, type: 'Text' })),
        ...(videoInfo || []).map(item => ({ ...item, type: 'Video' }))
    ];

    const filteredHistory = sorting === "All"
        ? allHistoryRaw
        : allHistoryRaw.filter(item => item.type === sorting);

    return (
        <div className='min-h-[60vh] w-[85%] mx-auto py-10'>
            <h2 className='text-5xl font-bold mb-8'> Timeline </h2>

            <div className="dropdown mb-8">
                <div
                    tabIndex={0}
                    role="button"
                    className="flex justify-between items-center border border-gray-200 rounded-lg px-4 py-3 w-64 bg-white text-gray-500"
                >
                    <span>{sorting === "All" ? "Filter timeline" : sorting}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-64 p-2 shadow border border-gray-100">
                    <li onClick={() => setSorting('All')}><a>All History</a></li>
                    <li onClick={() => setSorting('Call')}><a>Call</a></li>
                    <li onClick={() => setSorting('Text')}><a>Text</a></li>
                    <li onClick={() => setSorting('Video')}><a>Video</a></li>
                </ul>
            </div>

            {filteredHistory.length === 0 ? (
                <div className='bg-gray-100 my-15 rounded-xl mx-auto'>
                    <h2 className='text-3xl font-semibold text-red-600 mx-auto text-center py-10'>
                        Not available history!
                    </h2>
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    {filteredHistory.map((history, index) => (
                        <div key={index} className="flex items-center p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                            <div className="text-3xl mr-4">
                                {history.type === 'Call' && '📞'}
                                {history.type === 'Text' && '💬'}
                                {history.type === 'Video' && '📹'}
                            </div>

                            <div className="flex flex-col">
                                <div className="flex items-baseline gap-2">
                                    <h2 className="text-orange-600 font-bold text-lg">
                                        {history.type}
                                    </h2>
                                    <span className="text-[#6B7280] text-lg font-medium">
                                        with {history.name || 'Unknown'}
                                    </span>
                                </div>

                                <p className="text-[#6B7280] text-sm mt-1">
                                    {history.date ? history.date : new Date().toLocaleDateString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Timeline;