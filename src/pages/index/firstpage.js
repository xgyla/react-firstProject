import React from 'react';

import { Button } from 'antd';

import './firstpage.css'

class firstpage extends React.Component{
    handleClick(){
        alert('哈哈');
    }
    render(){
        return(
            <div className='firstWrap'>
                <p>首页</p>
            </div>  
        )
      
    }
}

export default firstpage;