import React, { Component } from 'react';

import './Slider.css';

class Slide extends Component {
    
    constructor(){
        super();

        this.state={
            isDragging: false,
            startPos: 0,
            currentTranslate: 0,
            currentIndex: 0,
            prevTranslate: 0,
            animationId: 0
        }
    }

    cancelDragEffect(event){
        event.preventDefault();
    }

    // Touch event methods
    handleTouchEvent(event, index) {
         console.log("Touch started!")
         this.setState({
            currentIndex: index 
         })
         console.log(event.type)
         this.setState({
             isDragging: true
         })
        
    }


    handleTouchMove() {
        
        if(this.state.isDragging === true) {
            console.log("Touch move")
        }
    }

    handleTouchEnd() {
        console.log("end")
        this.state.isDragging = false
    }


    handleMouseDown(event, index) {
        console.log("Touch started!")
         this.state.currentIndex = index;
         console.log(event.type)
         this.state.isDragging = true
    }

    


    


    render() { 

        console.log(this.props.index)

        return ( 
            <div className="slide" key={this.props.id} index={this.props.index}>
                <div className="demo-content">
                    {/* <h2>{this.props.subject}</h2> */}
                    <img className="demo-image" 
                    src={this.props.image} 
                    onDragStart={(e) => {this.cancelDragEffect(e)}} 
                    onTouchStart={(event, index) => {this.handleTouchEvent(event, index)}}
                    onTouchEnd={() => {this.handleTouchEnd()}}
                    onTouchMove={() => {this.handleTouchMove()}}
                    onMouseDown={(event, index) => {this.handleMouseDown(event, index)}}
                    onMouseUp={() => {this.handleTouchEnd()}}
                    onMouseLeave={() => {this.handleTouchEnd()}}
                    onMouseMove={() => {this.handleTouchMove()}}
                    onContextMenu={(e) => {
                        e.preventDefault();
                    
                    }}

                    ></img>
                </div>
            </div>
         );
    }
}
 
export default Slide;