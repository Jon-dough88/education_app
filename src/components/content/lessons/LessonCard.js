import React, { Component } from 'react';
import './LessonCard.css'

class LessonCard extends Component {
    render() {
        return (
           <div className="card">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nSSaVLnXxl2ivUfvn8I9rQHaEl%26pid%3DApi&f=1" className="img-fluid rounded-start " alt=""></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                           <span><h3 className="card-title">Lesson title</h3><h5>Package</h5></span>
                           <br></br> 
                           <div>
                               <button className="btn btn-lg btn-primary">Start</button>
                           </div>
                           <div>
                               <div className="favorite-btn-container"><i class="fas fa-star fa-2x" style={{color: "gold"}}></i></div>
                               <div className="stats-btn-container"><i class="far fa-chart-bar fa-2x" style={{color: "indigo"}}></i></div>
                           </div>
                        </div>
                    </div>
                </div>
           </div>
        )
    }
}



export default LessonCard