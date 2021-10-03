import React, { Component } from 'react';

import './LessonTag.css'

class LessonTag extends Component {
    
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="card lesson-tag">
                {this.props.tag}   
            </div>
        )
    }
}


export default LessonTag


