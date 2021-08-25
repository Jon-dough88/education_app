import React, { Component } from 'react';

import './Slider.css';

class Slide extends Component {
    
    constructor(){
        super();

        this.state={
            isDragging: false,
            startPos: 0,
            // currentTranslate: 0,
            currentIndex: 0,
            // currentPosition: 0,
            // prevTranslate: 0,
            // animationId: 0,
            // transform: ''
        }
    }

    cancelDragEffect(event){
        event.preventDefault();
    }

    // // Touch event methods

    handleTouchEvent(event, index) {
         console.log("Touch started!")
        //  console.log(event.type)
         console.log(`Start position: ${this.state.startPos}`)

         this.setState({
            currentIndex: index,
            isDragging: true,
            
         })

         this.getPosition(event)

         this.animate()

         
         
        
    }


    handleTouchMove(e) {
           
        // const currentPos = this.getPosition(e);

        if(this.state.isDragging === true) {
            console.log("Touch move")
            console.log(`Current position: ${this.state.currentPosition}`)

            this.setState({
                correntPosition: this.getPosition(e),
                currentTranslate: this.state.prevTranslate + this.state.currentPosition - this.state.startPos
            })
            

            // this.state.currentTranslate = this.state.prevTranslate + this.state.currentPosition - this.state.startPos
        }
    }

    handleTouchEnd() {
        console.log("end")
        this.setState({
            isDragging: false
        })
    }

    getPosition(event){
        console.log(event)
        this.setState({
            startPos: this.getCurrentPosition(event),
            currentPosition: this.getCurrentPosition(event)
        })
    
    }

    getCurrentPosition(event) {
        // console.log(event)
        const currentPos = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
        // console.log(`Start position: ${startPos}`)
        return currentPos
    }

    
    animate() {

        this.state.isDragging === true &&
            this.setState({
                animationId: window.requestAnimationFrame(this.animate()),
                transform: `translateX(${this.state.currentTranslate}px)`
            })

        console.log(this.state.currentTranslate)
    }

    // animation() {
    //     console.log('The animation has been triggered!')
    //     this.state.isDragging === true &&
    //     requestAnimationFrame(this.animate())
    // }


    handleMouseDown(event, index) {
        console.log("Touch started!")
         this.setState({
             currentIndex: index
         })
         console.log(event.type)
         this.setState({
             isDragging: true
         })
    }

    

    


    render() { 
        
        // console.log(this.props.index)

        return ( 
            <div className="slide" key={this.props.id} index={this.props.index} style={{transform: `${this.state.transform}`}}> 
                <div className="demo-content">
                    {/* <h2>{this.props.subject}</h2> */}
                    <img className="demo-image" alt="Lesson" 
                    // style={{transform: `${this.state.transform}`}}
                    src={this.props.image} 
                    onDragStart={(e) => {this.cancelDragEffect(e)}} 
                    onTouchStart={(event, index) => {this.handleTouchEvent(event, index)}}
                    onTouchEnd={() => {this.handleTouchEnd()}}
                    onTouchMove={(e) => {this.handleTouchMove(e)}}
                    
                    onMouseDown={(event, index) => {this.handleTouchEvent(event, index)}}
                    onMouseUp={() => {this.handleTouchEnd()}}
                    onMouseLeave={() => {this.handleTouchEnd()}}
                    onMouseMove={(e) => {this.handleTouchMove(e)}}
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