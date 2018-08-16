import React from 'react'
import { Route } from 'react-router-dom'

import { Layout } from 'antd'  //借助Layout布局

// import firstpage from './pages/index/firstpage'
import firstpage from '../pages/index/firstpage'
import manage from '../pages/manage/manage'
import user from '../pages/user/user'

const { Content } = Layout
export default class Contents extends React.Component{
    render(){
        return(
            <Content>
              <Route path='/firstpage' Component={firstpage}></Route>
              <Route path='/manage' Component={manage}></Route>
              <Route path='/user' Component={user}></Route>
            </Content>
        )
    }
}