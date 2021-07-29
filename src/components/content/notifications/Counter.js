import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="counter-container">
               <p className="counter-number">1</p>     
            </div>
         );
    }
}
 
export default Counter;