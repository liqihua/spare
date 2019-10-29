import React from 'react';
import Header from './header'
import Footer from './footer'
import Main from './main'
import './style.css'

class Phone extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headerDisplay:'none'
        }
        this.handleScroll = this.handleScroll.bind(this)
    }
    

    render() {
        return (
            <div className='phone'>
                <Header display={this.state.headerDisplay}/>
                <Main/>
                <Footer/>
            </div>
        )
    }


    // 组件被挂载到页面后被执行
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

export default Phone;