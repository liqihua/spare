import React from 'react'
import Home from './home'
import './style.css'
import 'antd-mobile/dist/antd-mobile.css'

class Phone extends React.Component {
    render() {
        return (
            <div className='phone'>
                <Home/>
            </div>
        )
    }
}

export default Phone;