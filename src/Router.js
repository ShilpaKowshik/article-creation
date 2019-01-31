import React, { Component } from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router'
import App from './containers/App/App'
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
import Create from './pages/Create/Create'

export default function RouterPage() {
    return <Router routes={
      <Route path='/' component={App}>
          <IndexRoute component={Home}/>
         <Route path="detail" component={Detail}/>
         <Route path="create" component={Create}/>
      </Route>
       } history={browserHistory} />
}
