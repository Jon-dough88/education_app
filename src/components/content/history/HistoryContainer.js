import React, { Component } from 'react';

import './History.css';
import HistoryTab from './HistoryTab';
import Slider from '../../elements/Slider/Slider';

class HistoryContainer extends Component {

    render() {
        return(
             <div className="card history-bar">
                {/* <div className="row history-row">
                    <HistoryTab />
                    <HistoryTab />
                    <HistoryTab />
                    <HistoryTab />
                    <HistoryTab />
                    <HistoryTab />
                    <HistoryTab />
                    <HistoryTab />

                </div> */}
                <Slider />
             </div>
        )
    }

}


export default HistoryContainer