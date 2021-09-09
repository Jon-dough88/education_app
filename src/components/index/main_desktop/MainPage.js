import React, { Component } from 'react';
import Sidebar from '../../elements/sidebar/Sidebar';
import Main from '../Main';

import './MainPage.css';

class MainPage extends Component {

    render() {

        return(
            <div className="jumbotron main-page">
                <div className="row">
                    <div className="col-md-2 main-column" id="slider">
                        <Sidebar />
                    </div>
                    <div className="col-md-7 main-column" id="content">
                        {/* <h1>Main content</h1> */}
                        <Main />
                    </div>
                    <div className="col-md-2 main-column" id="promotional">
                        <h1>Promotional</h1>
                    </div>
                </div>
            </div>
        )
    }
}


export default MainPage