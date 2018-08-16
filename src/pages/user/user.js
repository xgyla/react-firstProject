import React from 'react';

import { Button } from 'antd';

import './user.css'

class user extends React.Component{
    handleClick(){
        alert('哈哈');
    }
    render(){
        return(
            <div className='userWrap'>
                <p>管理页</p>
            </div>  
        )
    }
}

export default user;