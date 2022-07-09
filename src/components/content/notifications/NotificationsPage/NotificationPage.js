import React, { Component } from 'react';

import '../NotificationCard/NotificationCard';
import NotificationCard from '../NotificationCard/NotificationCard';

import './NotificationPage.css';


class NotificationPage extends Component {

    state = {  } 

    render() { 
        return (
            <div className="jumbotron container notification-page">
               <NotificationCard />
            </div>
        );
    }
}
 
export default NotificationPage;