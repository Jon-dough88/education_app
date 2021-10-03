import React, { Component } from 'react';
import './PackageBar.css';

class PackageBar extends Component {
    constructor(props) {
        super(props)
       
    }
    
    render() { 
        return ( 
            <div className={this.props.packageType}>
                {this.props.text}
                </div>
         );
    }
}
 
export default PackageBar;