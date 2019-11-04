import React from 'react'
import iconGoBack from '@/static/mobile/images/icon/icon-go-back.png'
import iconSearch from '@/static/mobile/images/icon/icon-search.png'
import './style.css'

class SearchPage extends React.Component{
    render() {
        return (
            <div id='searchPage'>
                <div id='searchBar'>
                    <div className='searchArea-left' onClick={this.handleGoBackClick.bind(this)}>
                        <img src={iconGoBack} alt=''/>
                    </div>
                    <div className='searchArea-center'>
                        <div className='searchArea-center-radius'>
                            <div className='searchArea-center-icon-wrap'>
                                <img src={iconSearch} alt=''/>
                            </div>
                            <div className='searchArea-center-input-wrap'>
                                <input placeholder='商品/店铺' autoFocus='autoFocus'/>
                            </div>
                        </div>
                    </div>
                    <div className='searchArea-right'>
                        <span>搜索</span>
                    </div>
                </div>
                <div id='hotSearch'>
                    <div className='hotSearch-title'>
                        <span>热门搜索</span>
                    </div>
                    <div className='hotSearch-keys'>
                        <div className='hotSearch-keys-item'><span>法兰绒床垫</span></div>
                        <div className='hotSearch-keys-item'><span>仙人球防辐射</span></div>
                        <div className='hotSearch-keys-item'><span>便携座椅</span></div>
                        <div className='hotSearch-keys-item'><span>破壁机</span></div>
                        <div className='hotSearch-keys-item'><span>照片扫描仪</span></div>
                        <div className='hotSearch-keys-item'><span>活性炭</span></div>
                        <div className='hotSearch-keys-item'><span>无线网卡</span></div>
                        <div className='hotSearch-keys-item'><span>计算器</span></div>
                        <div className='hotSearch-keys-item'><span>哑铃</span></div>
                        <div className='hotSearch-keys-item'><span>除湿机</span></div>
                        <div className='hotSearch-keys-item'><span>晾衣架</span></div>
                        <div className='hotSearch-keys-item'><span>遛狗绳</span></div>
                    </div>
                    <div className='hotSearch-blank'></div>
                </div>
            </div>
        )
    }

    handleGoBackClick() {
        this.props.history.push('/')
    }
}

export default SearchPage;