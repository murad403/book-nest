import React from 'react';
import { LineWave } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='flex items-center justify-center'>
            <LineWave height={100} width={100} radius={5} color="#4fa94d" ariaLabel="ball-triangle-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
        </div>
    );
};

export default Loading;