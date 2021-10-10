import React, { Component } from 'react';

import LessonCard from '../content/lessons/LessonCard';
import HistoryContainer from '../content/history/HistoryContainer';
import SuggestionCard from '../content/suggestions/SuggestionCard';
// import Sidebar from '../elements/sidebar/Sidebar';

class Main extends Component { 
    
    constructor(props) {
        super(props)
        this.state={
            data=[
                {
                id: 1,
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nSSaVLnXxl2ivUfvn8I9rQHaEl%26pid%3DApi&f=1",
                itemType: "lesson",
                title: "Grammar",
                tags: ["Vocabulary 7", "Grammar 3", "Reading2", "Writing 1"],
                package: "basic",
                level: "B2",
                completed: 3
                },
                {
                    id: 2,
                    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.gaston.edu%2Flibrary%2Fwp-content%2Fuploads%2Fsites%2F38%2F2014%2F06%2Fliterature.jpg&f=1&nofb=1",
                    itemType: "lesson",
                    title: "5P Literature",
                    tags: ["Literature", "5P"],
                    package: "basic",
                    level: "B2",
                    completed: 5
                },
                {
                    id: 3,
                    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficdn.isrgrajan.com%2Fin%2F2018%2F12%2Fexam-preparation.jpg&f=1&nofb=1",
                    itemType: "lesson",
                    title: "4P Final Exam Prep",
                    tags: ["Exam", "Prep", "Grammar 4"],
                    package: "basic",
                    level: "B1",
                    completed: 8
                },

            ]
        }
    }

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