import React from 'react'
import Header from './header'
import Main from './main'
import Footer from './footer'
import { withRouter } from 'react-router';

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
                <Header display={this.state.headerDisplay} goSearchPage={this.goSearchPage.bind(this)}/>
                <Main goSearchPage={this.goSearchPage.bind(this)}/>
                <Footer/>
            </div>
        )
    }

    componentDidMount() {
        window.addEventListener('scroll',this.handleScroll)
    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return
        }
    }

    handleScroll() {
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

    goSearchPage() {
        this.props.history.push('/mobile/home/search')
    }
}

export default withRouter(Home);