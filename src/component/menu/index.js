import React, { useEffect, useState } from 'react';
import { Button, Menu } from 'antd';
import Link from 'next/link';
import { useTour } from '@reactour/tour';
import { useRouter } from 'next/router';

const blogMenu = [
    { label: 'Apa yaaa', url: '/' },
    { label: 'Menu menu', url: '/' },
]

const listMenu = [
    { label: 'Home', url: '/', key: "home" },
    { label: 'Portofolio', url: '/portofolio', key: "portofolio" },
    { label: 'Blog', url: '/', subMenu: blogMenu, key: "bolg" },
    { label: 'About', url: '/profile', key: "profile" },
]

const getMenu = val => (
    <Menu.Item key={val.key} style={{ padding: '0  2rem' }}>
        <Link href={val.url}>
            {val.label}
        </Link>
    </Menu.Item>
)

const Index = () => {
    const [current, setCurrent] = useState('home');
    const router = useRouter();
    const { setIsOpen } = useTour();
    const onClick = (e) => {
        setCurrent(e.key);
    };

    useEffect(() => {
        if (router) {
            const path = router?.asPath?.replace('/', '') || 'home';
            setCurrent(path.toLowerCase())
        }
    }, [router])

    return (
        <div className='center' >
            <Menu
                // defaultSelectedKeys={['Home']}
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
            {/* <Button className='btnAsk' onClick={() => setIsOpen(true)}>
                ?
            </Button> */}
        </div>
    );
};

export default Index;