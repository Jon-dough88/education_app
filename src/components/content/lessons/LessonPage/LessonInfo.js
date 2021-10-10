import React, { Component } from 'react';

import './LessonInfo.css';
// import LessonCard from '../LessonCard';
import PackageBar from '../../../elements/Package_bar/PackageBar';


class LessonInfo extends Component {
    render() { 
        return (
            <div className="card">
                <div className="row title-row">
                    <div className="col">
                        <div className="image">
                            <img className="lesson-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nSSaVLnXxl2ivUfvn8I9rQHaEl%26pid%3DApi&f=1" alt="Lesson image"></img>
                        </div>
                        <div className="level">
                            <h2>B2</h2>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row right-top-row">
                            <div className="col">
                                <h2 className="lesson-title">
                                    Grammar
                                </h2>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="row content-row">

                </div>
            </div>
        )
    }
}
 
export default LessonInfo;