import React, { Component } from 'react';

import Sidebar from '../../../elements/sidebar/Sidebar';
import LessonInfo from './LessonInfo';
import Promotional from '../../../elements/Promotional/Promotional';

class LessonPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="jumbotron main-page">
                <div className="row">
                    <div className="col-md-2 main-column" id="slider">
                        <Sidebar />
                    </div>
                    <div className="col-md-7 main-column" id="content">
                        <LessonInfo />
                    </div>
                    <div className="col-md-3 main-column" id="promotional">
                        <Promotional />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default LessonPage;