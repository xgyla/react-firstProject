import React from 'react';
// browserHistory,IndexRedirect 4.0新版本去掉了

import { HashRouter} from 'react-router-dom';
import { Route,Redirect } from 'react-router';
// import createHistory from 'history/createBrowserHistory'
 
// import App from './App'
import login from './pages/login/login'
import commonLeft from './common/commonLeft'


// const history = createHistory()
// const location = history.location




//无状态组件

const RouteMap =() => {
    return(
        <HashRouter>  
          <div>
            {/* <Route path="/" exact component={login} /> */}
           {/* 路由切换问题 */}
            <Route path="/" component={commonLeft} />
            <Route path="/login" component={login} />
            {/* {location.hash === '#/' ? <Redirect to='/login' /> : ''} */}
            {/* <Route path="/login" component={login} /> */}
            {/* <Route path="/firstpage" component={firstpage} /> */}
          </div>        
        </HashRouter>  
    )
}


export default RouteMap