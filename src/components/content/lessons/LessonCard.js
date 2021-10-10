import React, { Component } from 'react';
import { Redirect } from 'react-router';

import './LessonCard.css'
import PackageBar from '../../elements/Package_bar/PackageBar';
import LessonTag from '../../elements/LessonTag/LessonTag';

// import SavedItemContainer from '../groupPage/groupSavedItems/SavedItemContainer';





class LessonCard extends Component {

    constructor(props){
        super(props)
       
    }
    
    lessonCardClickEvent(e) {
        console.log("I've been clicked!")
        console.log(e.target.id)
    }


    render() {
        return (
        

        <div className="card lesson-card">
            <div className="row title-row">
                <div className="col">
                    <div>
                        <img className="lesson-image" src={this.props.image} alt="Lesson image"></img>
                    </div>
                    <div className="col level">
                        <h2>{this.props.level}</h2>
                    </div>
                </div>

                <div className="col">
                    <div className="row right-top-row">
                        <div className="col">
                            <div className="card lesson-title">
                                <h3 >
                                    {this.props.itemType}
                                </h3>
                            </div>
          
                        </div>
                        <div className="col lesson-package">
                            <PackageBar packageType={this.props.package} text={this.props.package} />
                        </div>
                        <div className="col">
                            <button className="btn">
                                <h3>{this.props.completed}</h3>
                            </button>
                        </div>
                    </div>

                    <div className="row right-title-row">
                        <div className="col lesson-title">
                            <h2>{this.props.title}</h2>
                        </div>
                    </div>
                    <div className="row right-tag-row">
                        {this.props.tags.map((tag) => (
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

            </div>
        </div>   

        // <div className="card" onClick={(e) => { this.lessonCardClickEvent(e) }}>
        //     <div className="row">

        //         <div className="col-md-5">

        //             <div className="row">
        //                 <div className="col">
        //                     <img className="lesson-image" src={this.props.image} alt="Lesson image"></img>
        //                 </div>
        //             </div>
        //             <div className="row">
        //                 <div className="col">
        //                     <h2 className="lesson-level">{this.props.level}</h2>
        //                 </div>
        //                 <div className="col"></div>
        //                 <div className="col"></div>
        //             </div>
        //         </div>


        //         <div className="col-md-7">

        //             <div className="row" id="lesson-row">
        //                 <div className="col-4 lesson-item-type">
        //                     <div className="card">
        //                         <h2>{this.props.itemType}</h2>
        //                     </div>
        //                 </div>
        //                 <div className="col-3 lesson-package">
        //                     <PackageBar text={this.props.package} packageType={this.props.package}/>
        //                 </div>
        //                 <div className="col-5 lesson-top-separator"></div>
        //                 <div className="col-1" id="completed-col">
        //                     <button className="btn lesson-completed-button">
        //                         <h2>{this.props.completed}</h2>
        //                     </button>
        //                 </div>
        //             </div>

        //             <div className="row title-row">
        //                 <h1 className="lesson-title">{this.props.title}</h1>
        //             </div>

        //             <div className="row tag-row">
        //                 {this.props.tags.map((tag) => 
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