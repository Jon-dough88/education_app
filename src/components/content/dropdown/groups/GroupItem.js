import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class GroupItem extends Component {
   
    toGroupMenu() {
        return <Redirect to="/groupPage"></Redirect>
    }

    groupCardClicked(e) {
        console.log(e)
    }
   
    render() {

        return (
            <div className="col-md-8 col-sm-12 group-item">
                <div className="card" onClick={(event) => {this.groupCardClicked(event)}} >
                    {/* <a className="card-body group-item-card" href="/groupPage"> */}
                    <div className="card-body group-item-card" href="/groupPage">
                        <div className="row">
                            <div className="col-md-5 col-sm-5">
                                <h2>{this.props.group.groupName}</h2>
                            </div>
                            <div className="col-md-2 col-sm-1 group-separator">
                                
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <h2>{this.props.group.students.length}</h2>
                            </div>
                        </div>
                    {/* </a> */}
                    </div>
                    
                </div>
                
            </div>
        )
    }

}

export default GroupItem