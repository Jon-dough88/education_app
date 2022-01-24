import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import { getGroupPage } from '../../../../businessLogic/groups/groupActions';


class GroupItem extends Component {
   
    toGroupMenu() {
        return <Redirect to="/groupPage"></Redirect>
    }

    groupCardClicked(_id) {
        console.log(_id)
        this.props.openGroupPage(_id)
    }
   
    render() {
        const { _id } = this.props.group;
        console.log(_id);

        return (
            <div className="col-md-8 col-sm-12 group-item">
                <div className="card" onClick={(_id) => {this.groupCardClicked(_id)}} >
                    {/* <a className="card-body group-item-card" href="/groupPage"> */}
                    <div className="card-body group-item-card">
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


const mapDispatchToProps = dispatch => {
    return {
        openGroupPage: (_id) => { dispatch(getGroupPage(_id))}
    }
}

export default connect(null, mapDispatchToProps)(GroupItem);