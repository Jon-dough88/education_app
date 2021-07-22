import React, { Component } from 'react';
import './Bell.css'

class Bell extends Component {
    state = {  }
    render() { 
        return ( 

            <div className="bell-container">
                <i class="fas fa-bell fa-2x"></i>
            </div>
        );
    }
}
 
export default Bell;