import React, { Component } from 'react';

import './GroupPage.css';

class GroupPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="jumbotron container">
                <div className="row">
                    <div className="col group-title">
                        {/* <h1>{{GroupName}}</h1> */}
                        <div className="row">
                            <div className="col"><h1>Group Name</h1></div>
                            <div className="col"><h2>Number of students</h2></div>
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col group-btn-container">
                            <button className="btn btn-lg btn-primary">Manage Group</button>
                            <button className="btn btn-lg btn-primary">Group Profile</button>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>Group History</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" id="group-history"></div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>Recommended</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" id="group-recommendations">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>Saved</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" id="group-saved-items">
                            
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default GroupPage;