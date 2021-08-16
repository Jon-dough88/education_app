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
            currentPosition: 0,
            prevTranslate: 0,
            animationId: 0,
            transform: ''
        }
    }

    cancelDragEffect(event){
        event.preventDefault();
    }

    // Touch event methods
    handleTouchEvent(event, index) {
         console.log("Touch started!")
         console.log(event.type)
         console.log(`Start position: ${this.state.startPos}`)

         this.setState({
            currentIndex: index,
            isDragging: true,
         })

         this.getPosition(event)

         this.animate()

         
         
        
    }


    handleTouchMove(event) {
        
        
        if(this.state.isDragging === true) {
            console.log("Touch move")
            this.setState({
                currentPosition: this.getPosition(event)
            })
            // const currentPosition = this.getPosition(event)
            // console.log(currentPosition)
            // this.state.currentTranslate = this.state.prevTranslate + currentPosition - this.state.startPos
        }
    }

    handleTouchEnd() {
        console.log("end")
        this.setState({
            isDragging: false
        })
    }

    getPosition(event){
        

        this.setState({
            startPos: this.getStartPosition(event)
        })

        
        
    }

    getStartPosition(event) {
        console.log(event)
        const startPos = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
        console.log(`Start position: ${startPos}`)
        return startPos
    }

    
    animate() {

        
        this.state.isDragging === true &&
            this.setState({
                animationId: window.webkitRequestAnimationFrame(this.animate()),
                transform: `translateX(${this.state.currentTranslate}px)`
            })

        console.log(this.state.currentTranslate)
    }

    // animation() {
    //     console.log('The animation has been triggered!')
    //     this.state.isDragging === true &&
    //     requestAnimationFrame(this.animate())
    // }


    // handleMouseDown(event, index) {
    //     console.log("Touch started!")
    //      this.setState({
    //          currentIndex: index
    //      })
    //      console.log(event.type)
    //      this.setState({
    //          isDragging: true
    //      })
    // }

    


    


    render() { 
        
        // console.log(this.props.index)

        return ( 
            <div className="slide" key={this.props.id} index={this.props.index}> 
                <div className="demo-content">
                    {/* <h2>{this.props.subject}</h2> */}
                    <img className="demo-image" alt="Lesson" style={{transform: `${this.state.transform}`}}
                    src={this.props.image} 
                    onDragStart={(e) => {this.cancelDragEffect(e)}} 
                    onTouchStart={(event, index) => {this.handleTouchEvent(event, index)}}
                    onTouchEnd={() => {this.handleTouchEnd()}}
                    onTouchMove={() => {this.handleTouchMove()}}
                    onMouseDown={(event, index) => {this.handleTouchEvent(event, index)}}
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