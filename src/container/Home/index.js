import React, { useState } from 'react';
import MainProfile from './componet/MainProfile';
import SlickImage from './componet/SlickImage';
import { TourProvider } from '@reactour/tour';
import steps from '../../helper/step';
import Footer from '../../component/footer/index';
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const index = () => {
    const disableBody = (target) => disableBodyScroll(target);
    const enableBody = (target) => enableBodyScroll(target);
    return (
        <TourProvider
            steps={steps}
            scrollSmooth
            afterOpen={disableBody}
            beforeClose={enableBody}
            padding={{ mask: 14, popover: [5, 10], wrapper: 20 }}
        >
            <div style={{ padding: '7rem 2rem' }}>
                {/* <MainProfile /> */}
                <SlickImage />
            </div>
        </TourProvider >
    );
};

export default index;