import React, { Component } from 'react';

import LessonCard from '../content/lessons/LessonCard';
import HistoryContainer from '../content/history/HistoryContainer';
import SuggestionCard from '../content/suggestions/SuggestionCard';
// import Sidebar from '../elements/sidebar/Sidebar';

class Main extends Component { 

    render(){
        return (
            <div className="jumbotron">
                <div className="row" id="history">
                    <div className="col history-column">
                        <HistoryContainer />
                    </div>
                </div>
                <div className="row">
                    <div className="col" id="suggestions">
                        <SuggestionCard />
                    </div>
                </div>
                <div className="row">
                    <div className="col" id="main-content">
                        <LessonCard />
                        <LessonCard />
                        <LessonCard /> 
                        
    
                    </div>
                </div>
                <div className="row">
                    <div className="col" id="footer">
                    
                    </div>
                </div> 

            </div>
        )
    }

}

export default Main