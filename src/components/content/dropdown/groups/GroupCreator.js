import React, { Component } from 'react';
import './Groups.css'

class GroupCreator extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card group-creation-menu">
                <div className="card-body">
                    <form className="form-inline justify-content-center" id="group-creation-form">
                        <div className="form-group groups-formGroup">
                            <label for="group-name">Group name: </label>
                            <input type="text" className="form-control groups-input" id="group-name" aria-describedby="group-name"></input>
                        </div>
                        <div className="form-group groups-formGroup">
                            <label for="student-search">Add a student (click on the searchbar to choose): </label>
                            <input type="search" id="student-search" className="form-control groups-input"></input>
                            <button className="btn btn-primary btn-lg">Add</button>
                        </div>
                        <div className="form-group">
                            <button className="btn-lg level-btn" >4p</button>
                            <button className="btn-lg level-btn" >5p</button>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-lg create-group-btn">Create Group</button>
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default GroupCreator;