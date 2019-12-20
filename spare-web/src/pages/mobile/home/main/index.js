import React from 'react'
import './style.css'
import SearchArea from './searchArea'
import { Carousel, WingBlank } from 'antd-mobile'
import iconSearch from '@/static/mobile/images/carousel/1.jpg'


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            imgHeight: null,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }

    render() {
        return (
            <div className='main'>
                <div>
                    <SearchArea showSearchPage={this.showSearchPage.bind(this)} />
                        <Carousel
                            autoplay={true}
                            infinite
                        >
                            {this.state.data.map(val => (
                                <a
                                    key={val}
                                    href="http://www.alipay.com"
                                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                >
                                    <img
                                        src={iconSearch}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                        onLoad={() => {
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                </a>
                            ))}
                        </Carousel>
                </div>
                <div className='test'>main</div>
                <div className='test'>main</div>
                <div className='test'>main</div>
                <div className='test'>main</div>
                <div className='test'>main</div>
                <div className='test'>main</div>
                <div className='test'>main</div>
                <div className='test'>main</div>
                <div className='test'>main</div>
                <div className='test'>main</div>
                <div className='test'>main</div>
                <div className='test'>main</div>
                <div className='test'>main</div>
                <div className='test'>main</div>
                <div className='test'>main</div>
                <div className='test'>main</div>
                <div className='test'>main</div>
            </div>
        )
    }

    showSearchPage() {
        this.props.showSearchPage()
    }

}








export default Main;