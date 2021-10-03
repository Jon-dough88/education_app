import React, { Component } from 'react';

import SuggestionTab from './SuggestionTab';
import Slider from '../../elements/Slider/Slider';
import './Suggestion.css'


class SuggestionCard extends Component {

    render() {
        return(
            <div className="card suggestion-row">
                <div className="row g-0">
                    <div className="col-sm-12">
                        <div className="card-body">
                           <div className="suggestion-title"><span><h2 className="card-title">Recommended For You</h2></span></div>
                           <br></br> 
                           <div className="container">
                                <div className="row">
                                    <Slider></Slider>
                                    {/* <SuggestionTab />
                                    <SuggestionTab />
                                    <SuggestionTab />
                                    <SuggestionTab />
                                    <SuggestionTab />
                                    <SuggestionTab /> */}
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
           </div>
        )
    }
}


export default SuggestionCard