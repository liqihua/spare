import React from 'react'
import './style.css'
import SearchArea from './searchArea'
import { withRouter } from 'react-router';


class Main extends React.Component {
    render() {
        return (
            <div className='main'>
                <div>
                    <SearchArea goSearchPage={this.goSearchPage.bind(this)}/>
                </div>
                <div>main</div>
                <div>main</div>
                <div>main</div>
                <div>main</div>
                <div>main</div>
                <div>main</div>
                <div>main</div>
                <div>main</div>
                <div>main</div>
                <div>main</div>
                <div>main</div>
                <div>main</div>
                <div>main</div>
                <div>main</div>
                <div>main</div>
                <div>main</div>
                <div>main</div>
            </div>
        )
    }

    goSearchPage() {
        this.props.goSearchPage()
    }
    

}


    





export default withRouter(Main);