import React, { Component } from 'react';

import './Slider.css';

class Slide extends Component {
    
    constructor(){
        super();

        this.state={
            isDragging: false,
            startPos: 0,
            currentTranslate: 0,
            prevTranslate: 0,
            animationId: 0
        }
    }

    cancelDragEffect(event){
        event.preventDefault();
    }

    // Touch event methods
    handleTouchEvent(index) {
         console.log("Touch started!")
         this.state.isDragging = true
        
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

    disableContextMenu(event){
        event.preventDefault();
        event.stopPropagation();
        return false
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
                    onTouchStart={(index) => {this.handleTouchEvent(index)}}
                    onTouchEnd={() => {this.handleTouchEnd()}}
                    onTouchMove={() => {this.handleTouchMove()}}
                    onMouseDown={(index) => {this.handleTouchEvent(index)}}
                    onMouseUp={() => {this.handleTouchEnd()}}
                    onMouseLeave={() => {this.handleTouchEnd()}}
                    onMouseMove={() => {this.handleTouchMove()}}
                    onContextMenu={(e) => {this.disableContextMenu(e)}}

                    ></img>
                </div>
            </div>
         );
    }
}
 
export default Slide;