import React from 'react';
import Portofolio from '../../src/container/portofolio/index'
import Header from '../../src/component/header/index'
import Head from 'next/head';

function index() {
    return (
        <div className='container'>
            <Head>
                <title>About Me</title>
            </Head>
            <Header />
            <Portofolio />
        </div>
    );
}

export default index;