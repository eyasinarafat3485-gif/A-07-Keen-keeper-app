import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendConProvider';

const Timeline = () => {
    const { callInfo, textInfo, videoInfo } = useContext(FriendContext);

    const allHistory = [
        ...(callInfo || []).map(item => ({ ...item, type: 'Call' })),
        ...(textInfo || []).map(item => ({ ...item, type: 'Text' })),
        ...(videoInfo || []).map(item => ({ ...item, type: 'Video' }))
    ];

    return (
        <div className='min-h-[60vh] w-[85%] mx-auto py-10'>
            <h2 className='text-5xl font-bold mb-8'> Timeline </h2>

            {allHistory.length === 0 ? (
                <div className='bg-gray-100 my-15 rounded-xl mx-auto'>
                    <h2 className='text-5xl font-semibold text-red-600 mx-auto text-center py-10'>
                        Not available history!
                    </h2>
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    {allHistory.map((history, index) => (
                        <div key={index} className="flex items-center p-6 bg-white border border-gray-200 rounded-xl shadow-sm">

                            <div className="text-3xl mr-4">
                                {history.type === 'Call' && '📞'}
                                {history.type === 'Text' && '💬'}
                                {history.type === 'Video' && '📹'}
                                {!['Call', 'Text', 'Video'].includes(history.type) && '🤝'}
                            </div>

                            <div className="flex flex-col">
                                <div className="flex items-baseline gap-2">
                                    <h2 className="text-[#2D5A43] font-bold text-lg">
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