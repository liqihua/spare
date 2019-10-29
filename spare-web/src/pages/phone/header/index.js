import React from 'react'
import './style.css'

class Header extends React.Component {
    render() {
        return (
            <div className='header' style={{display:this.props.display}}>header</div>
        )
    }
}

export default Header;