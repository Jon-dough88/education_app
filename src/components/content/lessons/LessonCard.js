import React, { Component } from 'react';
import './LessonCard.css'

class LessonCard extends Component {
    render() {
        return (
           <div className="card">
               <div className="row">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col image">
                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nSSaVLnXxl2ivUfvn8I9rQHaEl%26pid%3DApi&f=1" className="img-fluid rounded-start lesson-image" alt=""></img>    
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-lg btn-primary start-button"><h4>Start</h4></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="row separator"></div>
                        <div className="row title-row">
                            <div className="col-md-6 col-lg-6 col-sm-12">
                                <h2 className="lesson-title">Lesson Title</h2> 
                                
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-12 package-container">
                                <div className="row">
                                    <div className="col-6">
                                        <h5>Package name</h5>
                                        <div className="package-bar"></div>
                                    </div>
                                
                                    
                                </div>  
                            </div>
                        </div>
                        <div className="row separator"></div>
                        <div className="row">
                            <div className="col"></div>
                            
                            <div className="col">
                                <div className="card secondary-button-container">
                                    <div className="row" id="separator"></div>    
                                        <div className="row">   
                                            <div className="col-6"><i class="fas fa-star fa-3x" style={{color: "gold"}}></i></div>
                                            <div className="col-6"><i class="far fa-chart-bar fa-3x" style={{color: "indigo"}}></i></div>
                                        </div>
                                </div>                     
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-4"></div>
                        </div>
                    </div>


                </div>
              
            
                {/* <div className="row g-0">
                    <div className="col-sm-4">
                        <div className="row left-row">
                            <div className="col">
                                 <img className="image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nSSaVLnXxl2ivUfvn8I9rQHaEl%26pid%3DApi&f=1" className="img-fluid rounded-start lesson-image" alt=""></img>
                            </div>
                        
                        </div>
                        <div className="row left-row">
                            <div className="col-4">
                                <button className="btn btn-lg btn-primary start-button"><h4>Start</h4></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="card-body">
                           <div className="row lesson-title">
                               <div className="col-md-6 col-lg-6 col-sm-4">
                                    <h3 className="card-title">Lesson Title</h3> 
                               </div>
                               
                               <div className="col-lg-6 col-sm-6 package-container">
                                   <h5>Package name</h5>
                                   <div className="package-bar"></div>
                               </div>
                           </div>
                           <br></br> 
                            <div className="btn-container">
                                <div className="row">
                                    <div className="col-md-4 col-sm-12">
                                            
                                        <div className="card secondary-button-container">    
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
                </div> */}
           </div>
        )
    }
}



export default LessonCard