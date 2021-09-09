import React, { Component } from 'react';

import Sidebar from '../../elements/sidebar/Sidebar';
import Main from '../Main';
import Promotional from '../../elements/Promotional/Promotional';

import './MainPage.css';

class GroupLandingPage extends Component {

    render() {

        return(
            <div className="jumbotron main-page">
                <div className="row">
                    <div className="col-md-2 main-column" id="slider">
                        <Sidebar />
                    </div>
                    <div className="col-md-7 main-column" id="content">
                        <Main />
                    </div>
                    <div className="col-md-3 main-column" id="promotional">
                        <Promotional />
                    </div>
                </div>
            </div>
        )
    }
}


export default GroupLandingPage