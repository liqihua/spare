import React from 'react'
import PC from './pc'
import Mobile from './mobile'
import MediaQuery from 'react-responsive'
import './style.css'

class Pages extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
					<PC/>
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px)'>
					<Mobile/>
				</MediaQuery>
            </div>
        )
    }
}

export default Pages;