import React from 'react'
import './style.css'
import SearchArea from './searchArea'


class Main extends React.Component {
    render() {
        return (
            <div className='main'>
                <div>
                    <SearchArea showSearchPage={this.showSearchPage.bind(this)}/>
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
    
    showSearchPage() {
        this.props.showSearchPage()
    }

}


    





export default Main;