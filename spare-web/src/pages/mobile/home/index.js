import React from 'react'
import Header from './header'
import Main from './main'
import Footer from './footer'
import SearchPage from './searchPage'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headerDisplay:'none',
            searchPageDisplay:'none'
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    render() {
        return (
            <div>
                <Header display={this.state.headerDisplay} showSearchPage={this.showSearchPage.bind(this)}/>
                <Main showSearchPage={this.showSearchPage.bind(this)}/>
                <Footer/>
                <SearchPage display={this.state.searchPageDisplay} hideSearchPage={this.hideSearchPage.bind(this)}/>
            </div>
        )
    }

    hideSearchPage() {
        this.setState({
            searchPageDisplay:'none'
        })
    }

    showSearchPage() {
        this.setState({
            searchPageDisplay:'block'
        })
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

    componentDidMount() {
        window.addEventListener('scroll',this.handleScroll)
    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return
        }
    }
}

export default Home;