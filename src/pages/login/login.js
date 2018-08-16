import React from 'react';

import { Button } from 'antd';


import { Link } from 'react-router-dom'

import './login.css'

class login extends React.Component{
    handleClick(){
        alert('哈哈');
    }
    render(){
        return(
            <div>
                <p className="loginwrap">登录页</p>
                <Button type="primary" className="loginBtn" onClick={this.handleClick}>login</Button>
                <Button type="primary" className="loginBtn" onClick={this.handleClick}>详情页</Button>
                <Button type="primary" className="loginBtn" onClick={this.handleClick}>列表页</Button>
                <Link to='/firstpage'>跳到首页</Link>
            </div>  
        )
      
    }
}

export default login;

