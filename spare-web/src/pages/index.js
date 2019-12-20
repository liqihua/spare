import React from 'react'
import PC from './pc'
import MediaQuery from 'react-responsive'
import { Redirect } from 'react-router-dom'
import './style.css'

class Pages extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
					<PC/>
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px)'>
                    <Redirect to={{ pathname: "/mobile" }} />;
				</MediaQuery>
            </div>
        )
    }
}

export default Pages;