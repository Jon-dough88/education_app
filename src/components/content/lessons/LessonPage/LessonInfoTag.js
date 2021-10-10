import React, { Component } from 'react';


class LessonInfoTag extends Component {

    constructor(props) {
        super(props);
        // this.state={
        //     title: "",
        //     thumbnailImages: 
        //                 [{
        //                 intro: {
        //                     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/LED_traffic_light.svg/220px-LED_traffic_light.svg.png"
        //                 },
        //                 vocabulary1: {
        //                     url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FdtatfDRuD_CvqhWlZPdFhO8ZVaY%3D%2F2x0%3A638x424%2F1200x800%2Ffilters%3Afocal(2x0%3A638x424)%2Fcdn.vox-cdn.com%2Fassets%2F1797435%2F4093455287_211bbb4a2e_z.jpg&f=1&nofb=1"
        //                 },
        //                 main: {
        //                     url: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.huffingtonpost.com%2F2016-06-05-1465146534-8456759-readingabook.jpeg&f=1&nofb=1"
        //                 }

        //                 }]
        // }
    }

    render() { 
        return ( 
            <div className="col info-tag">
                <div className="row">
                    <div className="col info-image">
                        <img src={this.props.thumbnail} alt="Lesson info image"></img>
                    </div>
                    <div className="col info-title">
                        <div className="row">
                            <h2>{this.props.title}</h2>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}
 
export default LessonInfoTag;