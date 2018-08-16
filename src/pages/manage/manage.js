import React from 'react';

import { Button } from 'antd';

import './manage.css'

class manage extends React.Component{
    handleClick(){
        alert('哈哈');
    }
    render(){
        return(
            <div className='manageWrap'>
                <p>管理页</p>
            </div>  
        )
      
    }
}

export default manage;

