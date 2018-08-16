import React from 'react';
import { Link } from 'react-router-dom'
import { Tabs,Collapse,Layout } from 'antd';
import Top from './top'
import Bottom from './bottom'
import Contents from './content'


import './commonLeft.css'

const { Sider } = Layout

const TabPane = Tabs.TabPane
const Panel = Collapse.Panel
// const text = `
// A dog is a type of domesticated animal.
// Known for its loyalty and faithfulness,
// it can be found as a welcome guest in many households across the world.
// `;

class commonLeft extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            modalShow:false
        }
    }
    callback(key){
      console.log(key);
    }
    
    render(){
        return(
            <Layout>
                <Sider className='firstWrap'>   
                    {/* <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs> */}

                    <Collapse defaultActiveKey={['1']} onChange={this.callback}>
                        <Panel header="用户管理" key="1">
                        <ul>
                            <li><Link to='/manage'>管理界面</Link></li>
                            <li><Link to='/user'>用户界面</Link></li>
                        </ul>
                        </Panel>
                        <Panel header="个人中心" key="2">
                        <ul>
                            <li><Link to='/firstpage'>编辑资料</Link></li>
                            <li>上传记录</li>
                        </ul>
                        </Panel>
                        <Panel header="数据展示" key="3">
                        <ul>
                            <li>页面效果</li>
                        </ul>
                        </Panel>
                    </Collapse>
                </Sider>
                <Layout>
                   <Top/>
                   <Contents/>
                   <Bottom/>
                </Layout>
            </Layout>
            
        )
      
    }
}

export default commonLeft;

