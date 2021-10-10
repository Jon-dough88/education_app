import React, { Component } from 'react';

import './LessonInfo.css';
// import LessonCard from '../LessonCard';
import PackageBar from '../../../elements/Package_bar/PackageBar';
import LessonTag from '../../../elements/LessonTag/LessonTag';

import LessonInfoTag from './LessonInfoTag';


class LessonInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nSSaVLnXxl2ivUfvn8I9rQHaEl%26pid%3DApi&f=1",
                title: "P5 Reading Practice",
                package: "basic",
                text: "Basic",
                tags: ["Vocabulary 4","Grammar2", "Reading 2"],
                
            
                info: {
                    intro: 
                        {
                            title: "Intro",
                            thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/LED_traffic_light.svg/220px-LED_traffic_light.svg.png"
                        },
                    
                    vocabulary: 
                        {
                            title: "Pre 1: Vocabulary",
                            thumbnail: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FdtatfDRuD_CvqhWlZPdFhO8ZVaY%3D%2F2x0%3A638x424%2F1200x800%2Ffilters%3Afocal(2x0%3A638x424)%2Fcdn.vox-cdn.com%2Fassets%2F1797435%2F4093455287_211bbb4a2e_z.jpg&f=1&nofb=1"
                        },
                    main: 
                        {
                            title: "Main 1: Reading",
                            thumbnail: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.huffingtonpost.com%2F2016-06-05-1465146534-8456759-readingabook.jpeg&f=1&nofb=1"
                        }

                }
                
           
        }
    }

    render() { 
        return (
            <div className="card lesson-info-card">
                <div className="row title-row">
                    <div className="col">
                        <div className="image">
                            <img className="lesson-image" src={this.state.image} alt="Lesson image"></img>
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
                                <PackageBar packageType={this.state.package} text={this.state.text} />
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
                                
                                <div className="card button-card">
                                    <div className="col-sm-6 col-md-6"><i className="fas fa-star fa-2x star"></i></div>
                                    <div className="col-sm-6 col-md-6"><i className="fas fa-save fa-2x save"></i></div>
                                </div>
                            </div>           
                        </div>                    
                    </div>
                </div>

                <div className="row content-row">
                    <LessonInfoTag title={this.state.info.intro.title} thumbnail={this.state.info.intro.thumbnail} />
                    <LessonInfoTag title={this.state.info.vocabulary.title} thumbnail={this.state.info.vocabulary.thumbnail} />  
                </div>
            </div>
        )
    }
}
 
export default LessonInfo;