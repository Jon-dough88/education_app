import React, { Component } from 'react';

import './BackArrow.css'

class BackArrow extends Component {

    goBack() {
        console.log("Back button clicked!")
    }

    render() { 
        return (
            <div className="back-arrow" onClick={() => {this.goBack()}}>
                <i className="fas fa-arrow-left fa-2x arrow-icon"></i>    
            </div>
        )
        
        
    }
}
 
export default BackArrow;