import React, { Component } from 'react';
import Redirect from 'react-router-dom';


class GroupItem extends Component {
   
    toGroupMenu() {

    }
   
    render() {

        return (
            <div className="col-md-8 col-sm-12 group-item" onClick={() => this.toGroupMenu}>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-5 col-sm-5">
                                <h2>Class name</h2>
                            </div>
                            <div className="col-md-2 col-sm-1 group-separator">
                                
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <h2>Student number</h2>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }

}

export default GroupItem