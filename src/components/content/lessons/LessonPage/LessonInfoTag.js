import React, { Component } from 'react';


class LessonInfoTag extends Component {

    constructor(props) {
        super(props);
        
    }
    render() { 
        return ( 
            <div className="col info-tag">
                <div className="row">
                    <div className="col info-image">
                        <img src={this.props.image} alt="Lesson info image"></img>
                    </div>
                    <div className="col info-title">
                        <div className="row">

                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}
 
export default LessonInfoTag;