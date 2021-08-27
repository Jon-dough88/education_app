import React, { Component } from 'react';

import './Slider.css';

class Slide extends Component {
    
    constructor(){
        super();

        this.state={
            // isDragging: false,
            // startPos: 0,
            // currentTranslate: 0,
            // currentIndex: 0,
            // currentPosition: 0,
            // prevTranslate: 0,
            // animationId: 0,
            // transform: ''
        }
    }

    // cancelDragEffect(event){
    //     event.preventDefault();
    // }

    // // // Touch event methods

    // handleTouchEvent(event, index) {
    //      console.log("Touch started!")
    //     //  console.log(event.type)
    //      console.log(this.props.index)

    //     const startPosition = this.getPositionX(event)

    //      this.setState({
    //         currentIndex: index,
    //         isDragging: true,
    //         startPos: startPosition
    //      })

    //      console.log(`Start position: ${this.state.startPos}`)

    //      this.animate()
   
        
    // }


    // handleTouchMove(e) {
           
    //     // const currentPos = this.getPosition(e);

    //     if(this.state.isDragging === true) {
    //         console.log("Touch move")

    //         console.log(`Previous translate: ${this.state.prevTranslate}`)
    //         console.log(`Current position: ${this.state.currentPosition}`)
    //         console.log(`Start position: ${this.state.startPos}`)
            

    //         const translate = this.state.prevTranslate + this.state.currentPosition - this.state.startPos 
            


    //         this.setState({
    //             correntPosition: this.getCurrentPosition(e),
    //             currentTranslate: translate
    //         })
            
    //         console.log(`Current translate: ${translate}`)
    //         // this.state.currentTranslate = this.state.prevTranslate + this.state.currentPosition - this.state.startPos
    //     }
    // }

    // handleTouchEnd() {
    //     console.log("end")
    //     this.setState({
    //         isDragging: false
    //     })
    // }

    // getCurrentPosition(event){
        
    //     this.setState({
    //         currentPosition: this.getPositionX(event)
    //     })
    
    // }

    // getPositionX(event) {
    //     const positionX = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
    //     return positionX
    // }

    
    // animate() {

    //     // const transform = `translateX(${this.state.currentTranslate}px)`;
    //     this.setSliderPosition()
        
    //     this.state.isDragging === true &&
            
    //         this.setState({
    //             animationId: window.requestAnimationFrame(this.animate()),
    //             // transform: `translateX(${this.state.currentTranslate}px)`
    //         })

    //     console.log(`Transform value: ${this.state.transform}`)
    // }

    // setSliderPosition() {
    //    this.setState({
    //        transform: `translateX(${this.state.currentTranslate}px)`
    //    }) 
    // }

    
    
    render() { 
        
        
        return ( 
            <div className="slide" key={this.props.id} 
                index={this.props.index} 
                // style={{transform: `${this.state.transform}`}}
                // onDragStart={(e) => {this.cancelDragEffect(e)}} 
                // onTouchStart={(event, index) => {this.handleTouchEvent(event, index)}}
                // onTouchEnd={() => {this.handleTouchEnd()}}
                // onTouchMove={(e) => {this.handleTouchMove(e)}}
                    
                // onMouseDown={(event, index) => {this.handleTouchEvent(event, index)}}
                // onMouseUp={() => {this.handleTouchEnd()}}
                // onMouseLeave={() => {this.handleTouchEnd()}}
                // onMouseMove={(e) => {this.handleTouchMove(e)}}
                // onContextMenu={(e) => {e.preventDefault()}}
                > 
                
                <div className="demo-content">
                    {/* <h2>{this.props.subject}</h2> */}
                    <img className="demo-image" alt="Lesson" 
                    // style={{transform: `${this.state.transform}`}}
                    src={this.props.image} 
                    // onDragStart={(e) => {this.cancelDragEffect(e)}} 
                    // onTouchStart={(event, index) => {this.handleTouchEvent(event, index)}}
                    // onTouchEnd={() => {this.handleTouchEnd()}}
                    // onTouchMove={(e) => {this.handleTouchMove(e)}}
                    
                    // onMouseDown={(event, index) => {this.handleTouchEvent(event, index)}}
                    // onMouseUp={() => {this.handleTouchEnd()}}
                    // onMouseLeave={() => {this.handleTouchEnd()}}
                    // onMouseMove={(e) => {this.handleTouchMove(e)}}
                    // onContextMenu={(e) => {e.preventDefault()}}
                    >

                    </img>
                </div>
            </div>
         );
    }
}
 
export default Slide;