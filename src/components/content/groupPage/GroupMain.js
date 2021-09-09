import React, { Component } from 'react';

import Sidebar from '../../elements/sidebar/Sidebar';
import GroupPage from './GroupPage';
import Promotional from '../../elements/Promotional/Promotional';

import '../../index/main_desktop/MainPage/MainPage.css'

class MainPage extends Component {

    render() {

        return(
            <div className="jumbotron main-page">
                <div className="row">
                    <div className="col-md-2 main-column" id="slider">
                        <Sidebar />
                    </div>
                    <div className="col-md-7 main-column" id="content">
                        <GroupPage />
                    </div>
                    <div className="col-md-3 main-column" id="promotional">
                        <Promotional />
                    </div>
                </div>
            </div>
        )
    }
}


export default MainPage