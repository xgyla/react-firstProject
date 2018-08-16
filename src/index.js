import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './pages/login/login';
import registerServiceWorker from './registerServiceWorker';

// 应用入口引入路由组件
import RouteMap from './routes'
ReactDOM.render(<RouteMap/>, document.getElementById('root'));
registerServiceWorker();
