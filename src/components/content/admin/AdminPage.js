import React, { Component } from 'react';

import Sidebar from '../../elements/sidebar/Sidebar';
import Promotional from '../../elements/Promotional/Promotional';

import './AdminPage.css';


class AdminPage extends Component {
    
    render() { 
        return ( 

            <div className="jumbotron main-page">
                <div className="row">
                    <div className="col-md-2 main-column" id="slider">
                        <Sidebar />
                    </div>
                    <div className="col-md-7 main-column" id="content">
                        <h1 className="admin-title">Admin Page</h1>
                    </div>
                    <div className="col-md-3 main-column" id="promotional">
                        <Promotional />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AdminPage;