import React from 'react';
import { InstagramOutlined, TwitterOutlined, LinkedinOutlined, FacebookOutlined, GooglePlusOutlined } from '@ant-design/icons';
import Image from 'next/image';

const index = () => {
    return (
        <div>
            <Image
                width={30}
                height={30}
                src="/icon/women.jfif"
                style={{ borderRadius: '50%' }}
            />
            <InstagramOutlined />
            <TwitterOutlined />
            <LinkedinOutlined />
        </div>
    );
};

export default index;