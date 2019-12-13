import React from 'react'
import './style.css'
import SearchArea from '@/pages/mobile/home/main/searchArea'

class Header extends React.Component {
    render() {
        return (
            <div id='header' style={{display:this.props.display}}>
                <SearchArea showSearchPage={this.showSearchPage.bind(this)}/>
            </div>
        )
    }

    showSearchPage() {
        this.props.showSearchPage()
    }
}

export default Header;