import React from 'react'
import { Route } from 'react-router-dom';
import Home from './home'
import Nav from './common/nav'
import './style.css'

class Mobile extends React.Component {
    render() {
        return (
            <div id='mobile'>
                <Route path='/mobile' exact component={Home}></Route>
                <Nav/>
            </div>
        )
    }
}

export default Mobile;