import React, { Component } from 'react';


class Promotional extends Component {

    render(){

        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card top-card">
                                <h4 className="card-title">Some catchy "hook"</h4>
                            </div>
                            <div className="card-body">
                                <div className="card-img-overlay">
                                    <h2 className="card-title">
                                        Some promotional stuff
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <button className="btn btn-lg btn-primary upgrade-button"><h3>Upgrade Now!</h3></button>
                </div>
            </div>
        )
    }

}


export default Promotional