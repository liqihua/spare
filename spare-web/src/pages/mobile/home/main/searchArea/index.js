import React from 'react'
import iconCategoryList from '@/static/mobile/images/icon/icon-category-list.png'
import iconSearch from '@/static/mobile/images/icon/icon-search.png'
import './style.css'
import { withRouter } from 'react-router';

class SearchArea extends React.Component {
    render() {
        return (
            <div id='searchArea'>
                <div className='searchArea-left'>
                    <img src={iconCategoryList} alt=''/>
                </div>
                <div className='searchArea-center'>
                    <div className='searchArea-center-radius'>
                        <div className='searchArea-center-icon-wrap'>
                            <img src={iconSearch} alt=''/>
                        </div>
                        <div className='searchArea-center-input-wrap' onClick={this.handleInputClick.bind(this)}>
                            <input placeholder='商品/店铺' disabled='disabled' />
                        </div>
                    </div>
                </div>
                <div className='searchArea-right'>
                    <span>登录</span>
                </div>
            </div>
        )
    }

    handleInputClick() {
        this.props.history.push('/mobile/home/search')
    }
}

export default withRouter(SearchArea)