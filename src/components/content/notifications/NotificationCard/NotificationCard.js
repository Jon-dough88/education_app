
import React, { Component } from 'react';

import './NotificationCard.css'


class NotificationCard extends Component {

    state = {  } 
    render() { 
        return (
            <div className="row">
                    <div className="col col-md-12">
                        <div className="notification-card">
                             <h3>Card content</h3>
                        </div>
                    </div>
            </div>
        );
    }
}
 
export default NotificationCard;