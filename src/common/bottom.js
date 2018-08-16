import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

export default class Bottom extends React.Component{
    render(){
        return(
            <Layout>
              <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2016 Created by Ant UED
              </Footer>
            </Layout>
        )
    }
}