import React , { useState } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { Form, Checkbox ,Input, Button } from 'antd';

const Signup = () => {
    
    const [id, setId] = useState('');
    const [nick, setNick] =  useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck , setPasswordCheck] = useState('');
    const [term , setTerm ] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({id,nick,password,passwordCheck,term});
    }
    
    const onChangeId = (e) => {
        setId(e.target.value);
    }

    const onChangeNick = (e) => {
        setNick(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    
    }

    const onChangePasswordChk = (e) => {
        setPasswordCheck(e.target.value);
    }

    const onChangeTerm = (e) => {
        setTerm(e.target.checked);
    }


    return (
        <>
        <Head>
          <title>artse</title>
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.css"/>   
        </Head>
        <AppLayout>
            <Form onSubmit={onSubmit} style={{ padding: 50}}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br/>
                    <Input name="user-id" value={id} required onChange={onChangeId}/>
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br/>
                    <Input name="user-nick" value={nick}  required onChange={onChangeNick}></Input>
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br/>
                    <Input name="user-password" value={password} type="password" required onChange={onChangePassword}></Input>
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br/>
                    <Input name="user-password-check" value={passwordCheck} type="password" required onChange={onChangePasswordChk}></Input>
                </div>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>동의합니다.</Checkbox>
                </div>
                <div>
                    <Button type="danger" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </AppLayout>
        </>
    );
};

export default Signup;