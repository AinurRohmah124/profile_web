import React, { useState } from 'react';
import { Button, Menu } from 'antd';
import Link from 'next/link';
import { useTour } from '@reactour/tour';

const blogMenu = [
    { label: 'Apa yaaa', url: '/' },
    { label: 'Terseraah dehhh', url: '/' },
    { label: 'Menu menu', url: '/' },
]

const listMenu = [
    { label: 'Home', url: '/' },
    { label: 'Potofolio', url: '/' },
    { label: 'Blog', url: '/', subMenu: blogMenu },
    { label: 'About', url: '/profile' },
]

const getMenu = val => (
    <Menu.Item key={val.label} style={{ padding: '0  2rem' }}>
        <Link href={val.url}>
            {val.label}
        </Link>
    </Menu.Item>
)

const index = () => {
    const [current, setCurrent] = useState('Home');
    const { setIsOpen } = useTour();
    const onClick = (e) => {
        setCurrent(e.key);
    };

    return (
        <div className='center' >
            <Menu
                defaultSelectedKeys={['Home']}
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                style={{ background: '#f3efef' }}
            >
                {listMenu.map(v => v.subMenu ?
                    <Menu.SubMenu key={v.label} title={v.label}>
                        {v.subMenu.map(subM => getMenu(subM))}
                    </Menu.SubMenu>
                    : getMenu(v)
                )}
            </Menu>
            <Button className='btnAsk' onClick={() => setIsOpen(true)}>
                ?
            </Button>
        </div>
    );
};

export default index;