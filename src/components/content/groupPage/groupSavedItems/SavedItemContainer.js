import React, { Component } from 'react';

import './SavedItemContainer.css';
import SavedItem from './SavedItem';


class SavedItemContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-md-3 col-sm-2 saved-item-container" id="group-saved-items">
                <SavedItem />
            </div>
         );
    }
}
 
export default SavedItemContainer;