import React, { Component } from 'react';

import './Slider.css';
import Slide from './Slide';

class Slider extends Component {
    
    constructor(props){
        super(props);

        this.state=[
            {
                id: 0,
                subject: "Grammar",
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.technocrazed.com%2Fwp-content%2Fuploads%2F2018%2F09%2Fgrammar.jpg&f=1&nofb=1"
            },
            {
                id: 1,
                subject: "Reading comprehension",
                image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.huffingtonpost.com%2F2016-06-05-1465146534-8456759-readingabook.jpeg&f=1&nofb=1"
            },
            {
                id: 2,
                subject: "Writing",
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200416164101-3-underscored-creative-writing-lead-super-tease.jpg&f=1&nofb=1"
            },
        ]
    }

    render() { 

        const slides = this.state
        // console.log(slides);

        return ( 
            <div className="slider-container">
                {/* <Slide key={this.state.item1.id} subject={this.state.item1.subject} image={this.state.item1.image}/>
                <Slide key={this.state.item2.id} subject={this.state.item2.subject} image={this.state.item2.image}/>
                <Slide key={this.state.item3.id} subject={this.state.item3.subject} image={this.state.item3.image}/>
                <Slide />
                <Slide />
                <Slide />
                <Slide />
                <Slide />
                <Slide />
                <Slide /> */}
                
                {slides.map((slide, index) => (
                    // <div className="col-1 slide">
                    <Slide key={slide.id} index={index} subject={slide.subject} image={slide.image}/>
                    // </div>
                ))}
            </div>
         );
    }
}
 
export default Slider;