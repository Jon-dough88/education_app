import React, { Component } from 'react';

import './LessonInfoTag.css';

class LessonInfoTag extends Component {

    constructor(props) {
        super(props);
       
    }

    render() { 
        return ( 
            <div className="col-12 info-tag">
                <div className="row">
                    <div className="col">
                        <img className="info-image" src={this.props.thumbnail} alt="Lesson info image"></img>
                    </div>
                    <div className="col info-container">
                        <div className="row info-row">
                            <h2>{this.props.title}</h2>
                        </div>
                        <div className="row info-row">
                            <h2>{this.props.level}</h2>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}
 
export default LessonInfoTag;