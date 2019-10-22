import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Profile = () => {
    return (
        <>
        <Head>
          <title>artse</title>
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.css"/>   
        </Head>
        <AppLayout>
        <div>
            프로필
        </div>
        </AppLayout>
       
        </>
    );
};

export default Profile;