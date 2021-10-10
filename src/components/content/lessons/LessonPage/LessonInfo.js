import React, { Component } from 'react';

import './LessonInfo.css';
// import LessonCard from '../LessonCard';


class LessonInfo extends Component {
    render() { 
        return (
            <div className="jumbotron">
                <div className="row title-row">
                    <div className="col">
                        <div>
                            <img className="lesson-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nSSaVLnXxl2ivUfvn8I9rQHaEl%26pid%3DApi&f=1" alt="Lesson image"></img>
                        </div>
                    </div>
                    <div className="col">

                    </div>
                </div>

                <div className="row content-row">

                </div>
            </div>
        )
    }
}
 
export default LessonInfo;