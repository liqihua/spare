import React from 'react'
import btnCategoryList from '@/static/images/btn-category-list.png'
import './style.css'
import { Flex, WhiteSpace } from 'antd-mobile';

class SearchArea extends React.Component {
    render() {
        return (
            <div className='searchArea'>
                <Flex>
                    <Flex.Item><div className='searchArea-left'>1</div></Flex.Item>
                    <Flex.Item><div className='searchArea-middle'>2</div></Flex.Item>
                    <Flex.Item><div className='searchArea-right'>3</div></Flex.Item>
                </Flex>
            </div>
        )
    }
}

export default SearchArea