import React from 'react';
import Profile from '../../src/container/Profile/index'
import Header from '../../src/component/header/index'
import Head from 'next/head';

function index() {
    return (
        <div className='container'>
            <Head>
                <title>About Me</title>
            </Head>
            <Header />
            <Profile />
        </div>
    );
}

export default index;