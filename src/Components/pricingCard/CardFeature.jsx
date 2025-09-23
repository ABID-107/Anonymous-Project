import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const CardFeature = ({ f }) => {
    return (
        <div className=''>
            <p className='flex gap-3'>
                <CircleCheckBig></CircleCheckBig>
                {f}
            </p>
        </div>
    );
};

export default CardFeature;