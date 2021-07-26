import React, { Component } from 'react';

import './History.css';
import HistoryTab from './HistoryTab';

class HistoryContainer extends Component {

    render() {
        return(
             <div className="card history-bar">
                <div className="row history-row">
                    <HistoryTab />
                    
                </div>
             </div>
        )
    }

}


export default HistoryContainer