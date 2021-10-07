import React, { Component } from 'react';

import './LessonCard.css'
import PackageBar from '../../elements/Package_bar/PackageBar';
import LessonTag from '../../elements/LessonTag/LessonTag';

import SavedItemContainer from '../groupPage/groupSavedItems/SavedItemContainer';





class LessonCard extends Component {

    constructor(props){
        super(props)
        this.state={
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nSSaVLnXxl2ivUfvn8I9rQHaEl%26pid%3DApi&f=1",
            itemType: "lesson",
            title: "Grammar",
            tags: ["Vocabulary 7", "Grammar 3", "Reading2", "Writing 1"],
            package: "basic",
            level: "B2",
            completed: 3
    
        }
    }
    
    lessonCardClickEvent(e) {
        console.log("I've been clicked!")
        // console.log(e.target)
    }


    render() {
        return (
        
            <SavedItemContainer />

        // <div className="card" onClick={(e) => { this.lessonCardClickEvent(e) }}>
        //     <div className="row">

        //         {/* Left column */}

        //         {/* <div className="col-6"> */}
        //         <div className="col-md-5">

        //             <div className="row">
        //                 <div className="col">
        //                     <img className="lesson-image" src={this.state.image} alt="Lesson image"></img>
        //                 </div>
        //             </div>
        //             <div className="row">
        //                 <div className="col">
        //                     <h2 className="lesson-level">{this.state.level}</h2>
        //                 </div>
        //                 <div className="col"></div>
        //                 <div className="col"></div>
        //             </div>
        //         </div>


        //         {/* Right column */}

        //         {/* <div className="col-6"> */}
        //         <div className="col-md-7">

        //             <div className="row" id="lesson-row">
        //                 <div className="col-4 lesson-item-type">
        //                     <div className="card">
        //                         <h2>{this.state.itemType}</h2>
        //                     </div>
        //                 </div>
        //                 <div className="col-3 lesson-package">
        //                     <PackageBar text={this.state.package} packageType={this.state.package}/>
        //                 </div>
        //                 <div className="col-5 lesson-top-separator"></div>
        //                 <div className="col-1" id="completed-col">
        //                     <button className="btn lesson-completed-button">
        //                         <h2>{this.state.completed}</h2>
        //                     </button>
        //                 </div>
        //             </div>

        //             <div className="row title-row">
        //                 <h1 className="lesson-title">{this.state.title}</h1>
        //             </div>

        //             <div className="row tag-row">
        //                 {this.state.tags.map((tag) => 
        //                      <LessonTag tag={tag} />   
        //                 )}
                        
        //             </div>

        //             <div className="row bottom-row">
        //                 <div className="col-md-7" style={{border: "purple"}}></div>
        //                 <div className="col-md-5">
        //                     <div className="card button-card">
        //                         <div className="col-sm-6 col-md-6"><i className="fas fa-star fa-2x star"></i></div>
        //                         <div className="col-sm-6 col-md-6"><i className="fas fa-save fa-2x save"></i></div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        )
    }
}



export default LessonCard