import React from 'react';
import { Menu, Input, Button } from 'antd';
import Link from 'next/link';

const AppLayout = ({children}) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>아티즈</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>나의프로필</a></Link></Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{ verticalAlign:"middle"}}/>
                </Menu.Item>
            </Menu>
            <Link href="/signup"><a><Button>화원가입</Button></a></Link>
            {children}
        </div>
    );
};

export default AppLayout;