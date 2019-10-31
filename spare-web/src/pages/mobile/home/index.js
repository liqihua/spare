import React from 'react'
import Header from './header'
import Main from './main'
import Footer from './footer'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headerDisplay:'none'
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    render() {
        return (
            <div>
                <Header display={this.state.headerDisplay}/>
                <Main/>
                <Footer/>
            </div>
        )
    }

    componentDidMount() {
        window.addEventListener('scroll',this.handleScroll)
    }

    handleScroll(event) {
        //滚动条滚动高度
        let scrollTop  = document.documentElement.scrollTop;
        if(scrollTop > 320) {
            this.setState({
                headerDisplay:'block'
            })
        } else {
            this.setState({
                headerDisplay:'none'
            })
        }
    }
}

export default Home;