import React, { Component } from 'react';
import LessonCard from '../content/lessons/LessonCard';

class Main extends Component { 

    render(){
        return (
            <div className="container jumbotron">
                
                <div className="row" id="history">
                    <div className="col">

                    </div>
                </div>
                <div className="row">
                    <div className="col" id="lessons">
                        <LessonCard />
                    </div>
                </div>
                <div className="row">
                    <div className="col" id="suggestions">

                    </div>
                </div> 

            </div>
        )
    }

}

export default Main