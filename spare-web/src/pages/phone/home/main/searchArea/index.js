import React from 'react'
import {SearchBar} from 'antd-mobile'

class SearchArea extends React.Component {
    render() {
        return (
            <div>
                <SearchBar placeholer="商品/店铺"/>
            </div>
        )
    }
}

export default SearchArea