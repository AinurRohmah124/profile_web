import React from 'react';
import Image from 'next/image';
import { Col, Row } from 'antd';
import Profile from '../../Profile/index';
import Portofolio from '../../portofolio/index';
import { InstagramOutlined, TwitterOutlined, LinkedinOutlined, FacebookOutlined, GooglePlusOutlined } from '@ant-design/icons';
const index = () => {
    return (
        <div className='homeProfile'>
            <Row className='profileContent'>
                <Col span={10} className='center step-1'>
                    <Image
                        width={200}
                        height={200}
                        src="/icon/women.jfif"
                        style={{ borderRadius: '50%' }}
                    />
                </Col>
                <Col span={14}>
                    <div className='step-2'>
                        <h3 style={{ fontSize: '3rem', fontWeight: 'bold', margin: 0 }}> Anne Hathaway</h3>
                        <h2 style={{ marginTop: 0 }}> Frontend Engineer</h2>
                    </div>
                    <div className='step-3 flex-between' style={{ width: '50%', paddingTop: '2rem' }}>
                        <InstagramOutlined style={{ fontSize: '1.5rem', fontWeight: 'bold', cursor: 'pointer' }} />
                        <TwitterOutlined style={{ fontSize: '1.5rem', fontWeight: 'bold', cursor: 'pointer' }} />
                        <LinkedinOutlined style={{ fontSize: '1.5rem', fontWeight: 'bold', cursor: 'pointer' }} />
                        <FacebookOutlined style={{ fontSize: '1.5rem', fontWeight: 'bold', cursor: 'pointer' }} />
                        <GooglePlusOutlined style={{ fontSize: '1.5rem', fontWeight: 'bold', cursor: 'pointer' }} />
                    </div>
                </Col>
            </Row>
            <Portofolio />
            <Profile />
        </div>
    );
};

export default index;