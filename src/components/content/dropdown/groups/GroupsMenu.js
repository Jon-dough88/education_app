import React, { Component } from 'react';

import GroupItem from './GroupItem';
import './Groups.css';


class GroupMenu extends Component {

    render() {
        return (
            <div className="container jumbotron group-menu">
                <div className="row group-title-row">
                    <div className="col-md-7 col-sm-5">
                        <h1 className="group-menu-title">My Groups</h1>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <a href="/groupCreation"><i class="fas fa-plus-circle fa-3x add-button"></i></a> 
                    </div>
                </div>
                <div className="row">
                    <GroupItem />
                    <GroupItem />
                </div>  
            </div>
        )
    }
}


export default GroupMenu