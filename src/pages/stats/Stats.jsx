import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendContext } from '../../context/FriendConProvider';

const Stats = () => {
    const { callInfo, textInfo, videoInfo } = useContext(FriendContext);
    const data = [
        { name: "Call", value: callInfo.length, fill: "#0088FE" },
        { name: "Text", value: textInfo.length, fill: "#FFBBCC" },
        { name: "Video", value: videoInfo.length, fill: "#FF8042" }
    ]
    return (
        <div className='min-h-[60vh] w-[85%] mx-auto py-15'>
            <h2 className='text-5xl font-bold mb-8 text-center'> Friendship Analytics </h2>

            <div className='bg-gray-100 flex justify-center py-5 rounded-xl'>
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    fill="#8884d8"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                />
                <Legend />
                <Tooltip />
            </PieChart>
            </div>
        </div>
    );
};

export default Stats;