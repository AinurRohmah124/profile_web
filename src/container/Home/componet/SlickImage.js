import React from 'react';
import SliderBanner from "./SlickBanner";
import { Col, Row } from 'antd';
import Profile from '../../Profile/index';
import Portofolio from '../../portofolio/index';
const index = () => {
    return (
        <div>
            <SliderBanner />
            <div className='homeProfile'>
                <Portofolio />
                <Profile />
            </div>
        </div>
    );
};

export default index;