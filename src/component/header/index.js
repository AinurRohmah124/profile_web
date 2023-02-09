import React from 'react';
import Image from 'next/image';
import Menu from '../menu/index';

const index = () => {
    return (
        <div className='header flex-between' style={{ padding: '2rem 0' }}>
            <Image
                width={200}
                height={50}
                src="/icon/yeyey.svg"
            />
            <Menu />
        </div>
    );
};

export default index;