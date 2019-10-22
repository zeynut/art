import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AppLayout from '../components/AppLayout';

const Home = () => {
    return (
        <>
        <Head>
            <title>artse</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.css"/>   
        </Head>
        <AppLayout>
              <Link href="/about"><a></a></Link>
              <div>applay의</div>
        </AppLayout>
        </>
    );
};

export default Home;