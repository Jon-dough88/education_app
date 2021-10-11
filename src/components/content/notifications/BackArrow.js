import React, { Component } from 'react';


class BackArrow extends Component {

    goBack() {
        console.log("Back button clicked!")
    }

    render() { 
        return (
            <div onClick={() => {this.goBack()}}>
                <i className="fas fa-arrow-left fa-2x back-arrow"></i>    
            </div>
        )
        
        
    }
}
 
export default BackArrow;