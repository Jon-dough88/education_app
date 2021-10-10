import React, { Component } from 'react';

import './LessonInfo.css';
// import LessonCard from '../LessonCard';
import PackageBar from '../../../elements/Package_bar/PackageBar';
import LessonTag from '../../../elements/LessonTag/LessonTag';


class LessonInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            packageType: "basic",
            text: "basic",
            tags: ["Vocabulary 4","Grammar2", "Reading 2"]
        }
    }

    render() { 
        return (
            <div className="card lesson-info-card">
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
                                <h3 className="lesson-title">
                                    Lesson
                                </h3>
                                
                            </div>
                            <div className="col">
                                <PackageBar packageType={this.state.packageType} text={this.state.text} />
                            </div>
                            <div className="col"></div>
                        </div>

                        <div className="row right-title-row">
                            <div className="col lesson-title">
                                <h2>Grammar</h2>
                            </div>
                        </div>
                        <div className="row right-tag-row">
                            {this.state.tags.map((tag) => (
                               <LessonTag tag={tag} />     
                            ))}
                        </div>
                        <div className="row right-button-row">
                             <div className="col"></div>
                             {/* <div className="col"></div> */}
                             <div className="col button-col">
                                {/* <div className="card">
                                    <i className="fas fa-star fa-2x star"></i>
                                    <i className="fas fa-save fa-2x save"></i>
                                </div> */}
                                <div className="card button-card">
                                    <div className="col-sm-6 col-md-6"><i className="fas fa-star fa-2x star"></i></div>
                                    <div className="col-sm-6 col-md-6"><i className="fas fa-save fa-2x save"></i></div>
                                </div>
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