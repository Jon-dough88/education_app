import React, { Component } from 'react';

import './GroupPage.css';
import Slider from '../../elements/Slider/Slider';
import SavedItemContainer from './groupSavedItems/SavedItemContainer';

import { connect } from 'react-redux';



class GroupPage extends Component {

    componentDidMount(){

    }

    openGroupManagementMenu(){
        console.log("Group management file clicked!")
    }

    
    render() { 

        const {groupPage} = this.props;
        console.log(groupPage);

        const groupId = groupPage._id;
        console.log(`Group ID: ${groupId}`);

        const {userId} = this.props;


        return ( 
            <div className="jumbotron group-page-container">
                <div className="row">
                    <div className="col group-title">
                        
                        <div className="row group-title-row">
                            <div className="col"></div>
                            <div className="col-md-3 col-sm-2">
                                {/* <h1>{{GroupName}}</h1> */}
                                <h1>{groupPage.groupName}</h1>
                            </div>
                            <div className="col"></div>
                            <div className="col-md-4 col-sm-3">
                                <h2 className="group-subtitle">Number of students: {groupPage.students.length}</h2>
                            </div>
                            <div className="col"></div>
                    
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col group-btn-container">
                            <button className="btn btn-lg btn-primary group-page-btn" onClick={() => {this.openGroupManagementMenu(userId, groupId)}}>Manage Group</button>
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

const mapStateToProps = state => {
    return {
        userId: state.users.userId,
        groupPage: state.groups.groupPage
    }
}
 
export default connect(mapStateToProps, null)(GroupPage);