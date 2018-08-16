import React from 'react'
import { Layout } from 'antd'

const { Header } = Layout

export default class Top extends React.Component{
    render(){
        return(
            <Layout>
              <Header>
                  <p>顶部</p>
              </Header>
            </Layout>
        )
    }
}
