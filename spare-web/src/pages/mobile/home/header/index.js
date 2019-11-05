import React from 'react'
import './style.css'
import SearchArea from '@/pages/mobile/home/main/searchArea'
import { withRouter } from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <div id='header' style={{display:this.props.display}}>
                <SearchArea goSearchPage={this.goSearchPage.bind(this)}/>
            </div>
        )
    }

    goSearchPage() {
        this.props.goSearchPage()
    }
}

export default withRouter(Header);