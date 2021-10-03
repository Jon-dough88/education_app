import React, { Component } from 'react';
import './PackageBar.css';

class PackageBar extends Component {
    constructor(props) {
        super(props)
        this.state={
            packageType: ""
        }
    }
    
    render() { 
        return ( 
            <div className="package-bar blue"></div>
         );
    }
}
 
export default PackageBar;