import React, { Component } from 'react';
import './LessonCard.css'





class LessonCard extends Component {

    constructor(props){
        super(props)
        this.state={
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nSSaVLnXxl2ivUfvn8I9rQHaEl%26pid%3DApi&f=1",
            title: "Grammar",
            tags: [],
            package: "free",
    
        }
    }
    

    render() {
        return (
        //    <div className="card">
        //        <div className="row">
        //             <div className="col-5 left-column">
        //                 <div className="row left-row">
        //                     <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 image">
        //                         <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nSSaVLnXxl2ivUfvn8I9rQHaEl%26pid%3DApi&f=1" className="img-fluid rounded-start lesson-image" alt=""></img>    
        //                     </div>
        //                 </div>
        //                 <div className="row" id="bottom-separator"></div>
        //                 <div className="row left-row">
        //                     <div className="col">
        //                         <button className="btn btn-lg btn-primary start-button"><h4>Start</h4></button>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="col-6">
        //                 <div className="row separator"></div>
        //                 <div className="row title-row">
        //                     <div className="col-md-4 col-lg-3 col-sm-4 col-xs-2 item-type-container">
        //                         <h2 className="lesson-title">Item Type</h2> 
        //                         {/* <div className="package-bar">Free</div> */}
        //                     </div>
        //                     <div className="col-md-3 col-lg-2 col-sm-4 package-container">
        //                         <div className="row">
        //                             <div className="col-sm-10">
        //                                 <div className="package-bar">Free</div>
        //                             </div>
                                
                                    
        //                         </div>  
        //                     </div>
        //                 </div>
        //                 <div className="row" id="bottom-separator"></div>
        //                 <div className="row" id="button-row">
        //                     <div className="col"></div>
                            
        //                     <div className="col-sm-6">
        //                         <div className="card secondary-button-container">
        //                             {/* <div className="row"></div>     */}
        //                                 <div className="row">   
        //                                     <div className="col-sm-6 col-md-6"><i className="fas fa-star fa-2x star"></i></div>
        //                                     <div className="col-sm-6 col-md-6"><i className="fas fa-save fa-2x save"></i></div>
        //                                 </div>
        //                         </div>                     
        //                     </div>
        //                     <div className="col-lg-2 col-md-2 col-sm-2"></div>
        //                 </div>
        //             </div>


        //         </div>
              
            
                
        //    </div>

        <div className="card">
            <div className="row">
                <div className="col-md-5" style={{border: "1px solid green"}}>
                    <div className="row">
                        <div className="col">

                        </div>
                    </div>
                    <div className="row">

                    </div>
                </div>
                <div className="col-md-7" style={{border: "1px solid blue"}}>

                </div>
            </div>
        </div>
        )
    }
}



export default LessonCard