import React, { Component } from 'react';

import './GroupPage.css';
import Slider from '../../elements/Slider/Slider';
import SavedItemContainer from './groupSavedItems/SavedItemContainer';

class GroupPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="jumbotron group-page-container">
                <div className="row">
                    <div className="col group-title">
                        
                        <div className="row group-title-row">
                            <div className="col"></div>
                            <div className="col-md-3 col-sm-2">
                                {/* <h1>{{GroupName}}</h1> */}
                                <h1>Group Name</h1>
                            </div>
                            <div className="col"></div>
                            <div className="col-md-3 col-sm-3">
                                <h2 className="group-subtitle">Number of students</h2>
                            </div>
                            <div className="col"></div>
                    
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col group-btn-container">
                            <button className="btn btn-lg btn-primary group-page-btn">Manage Group</button>
                            <button className="btn btn-lg btn-primary group-page-btn">Group Profile</button>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col">
                            <h2 className="title">Group History</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col group-history slider-bar" id="group-history">
                            <Slider />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2 className="title">Recommended</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col slider-bar" id="group-recommendations">
                            <Slider />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col saved-title">
                            <h2 className="title">Saved</h2>
                        </div>
                    </div>
                    <div className="row">
                        <SavedItemContainer />
                        <SavedItemContainer />
                        <SavedItemContainer />
                        <SavedItemContainer />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default GroupPage;