import React, { Component } from 'react';


class GroupItem extends Component {
   
   
    render() {
        return (
            <div className="col">
                <div className="row">
                    <div className="col-md-8">
                        <h2>Class name</h2>
                    </div>
                    <div className="col-md-4">
                        <h2>Student number</h2>
                    </div>
                </div>
            </div>
        )
    }

}

export default GroupItem