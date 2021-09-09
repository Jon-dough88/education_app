import React, { Component } from 'react';

import './Promotional.css';

class Promotional extends Component {

    render(){

        return(
            <div className="container">
                <div className="row card-row">
                    <div className="col">
                        <div className="card main-card text-center">
                            <div className="card top-card">
                                <h4>Some catchy "hook"</h4>
                            </div>
                            <div className="card-body">
                                <img className="card-img promotional-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Aufgeschlagenes_Buch_--_2020_--_4204_%28bw%29.jpg/640px-Aufgeschlagenes_Buch_--_2020_--_4204_%28bw%29.jpg"></img>
                                <div className="card-img-overlay image-overlay">
                                    <h3 className="card-title promotional-content">
                                        Some promotional stuff
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row button-row">
                    {/* <div className="col-md-8"> */}
                         <button className="btn btn-lg btn-primary form-control join-button"><h3>Upgrade Now!</h3></button>
                    {/* </div> */}
                   
                </div>
            </div>
        )
    }

}


export default Promotional