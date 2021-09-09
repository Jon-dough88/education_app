import React, { Component } from 'react';

import Counter from './Counter.js';
import './Bell.css'

class Bell extends Component {
    
    

    render() { 

       

        return ( 

            <div className="bell-container">
                <a href="/notifications">
                    <i className="fas fa-bell fa-2x bell"></i>  
                </a>
                <Counter />
            </div>
        );
    }
}
 
export default Bell;