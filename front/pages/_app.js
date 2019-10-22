import React ,{ Component} from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Artse = ({Component}) => {
    return (
     <>
        <Head>
            <title>artse</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.css"/>   
        </Head>
        <AppLayout>
             <Component/>
        </AppLayout>
     </>
    );
};

export default Artse;