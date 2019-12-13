import React from 'react'
import './style.css'
import SearchArea from './searchArea'
import { Button } from 'antd-mobile'


class Main extends React.Component {
    render() {
        return (
            <div className='main'>
                <div>
                    <SearchArea showSearchPage={this.showSearchPage.bind(this)}/>
                </div>
                <div>
                    <Button>123</Button>
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
            </div>
        )
    }
    
    showSearchPage() {
        this.props.showSearchPage()
    }

}


    





export default Main;