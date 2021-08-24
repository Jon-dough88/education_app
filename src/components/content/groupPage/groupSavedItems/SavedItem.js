import React, { Component } from 'react';

import './SavedItem.css';
import LessonCard from '../../lessons/LessonCard';
import PackageBar from '../../../elements/Package_bar/PackageBar';


class SavedItem extends Component {
    
    state = {  }
    
    
    render() { 
        return ( 
            <div className="card saved-item">
                <div className="row">
                    <div className="col" id="saved-item-image"></div>
                    <div className="col" id="saved-item-title">
                        <p><strong>Item Type</strong></p>
                    </div>
                    <div className="col">
                        <PackageBar />
                    </div>
                </div>
                <div className="row separator">

                </div>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-primary btn-sm">Start</button>
                    </div>
                    <div className="col"></div>
                    <div className="col">
                        <div className="btn-group">
                            <button className="btn"><i className="fas fa-star"></i></button>
                            <button className="btn"><i className="fas fa-save"></i></button>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default SavedItem;