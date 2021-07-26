import React, { Component } from 'react';
import './LessonCard.css'

class LessonCard extends Component {
    render() {
        return (
           <div className="card">
                <div className="row g-0">
                    <div className="col-sm-4">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nSSaVLnXxl2ivUfvn8I9rQHaEl%26pid%3DApi&f=1" className="img-fluid rounded-start lesson-image" alt=""></img>
                    </div>
                    <div className="col-sm-8">
                        <div className="card-body">
                           <div className="row lesson-title">
                               <div className="col-md-6 col-lg-6 col-sm-4">
                                    <h3 className="card-title">Lesson Title</h3> 
                               </div>
                               
                               <div className="col-lg-6 col-sm-4 package-container">
                                   <h5>Package name</h5>
                                   <div className="package-bar"></div>
                               </div>
                           </div>
                           <br></br> 
                            <div className="btn-container">
                                <div className="row">
                                    <div className="col-6 start-btn-container">
                                        <button className="btn btn-lg btn-primary"><h4>Start</h4></button>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-6"><i class="fas fa-star fa-3x" style={{color: "gold"}}></i></div>
                                            <div className="col-6"><i class="far fa-chart-bar fa-3x" style={{color: "indigo"}}></i></div>
                                        </div>
                                        
                                    </div>
                                </div>
                               
                            </div>
                                
                        </div>
                    </div>
                </div>
           </div>
        )
    }
}



export default LessonCard