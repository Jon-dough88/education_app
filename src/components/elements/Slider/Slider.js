import React, { Component } from 'react';

import './Slider.css';
import Slide from './Slide';

class Slider extends Component {
    
    constructor(props){
        super(props);

        this.state={
            isDragging: false,
            currentIndex: 0,
            startPos: 0,
            currentPosition: 0,
            prevTranslate: 0,
            currentTranslate: 0,
            transform: '',
            animationId: 0,
            slides: [    
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
        
    }



    // ******** New Methods ********

    // cancelDragEffect(event) {
    //     event.preventDefault()
    // }
    
    // getPositionX(e) {
    //     const positionX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX
    //     return positionX
    // }


    // handleTouch(e) {

    //     this.setState({
    //         startPos: this.getPositionX(e),
    //         isDragging: true,
            
    //     })
    //     console.log("Touch started")
    //     console.log(`Start position: ${this.state.startPos}`)
    // }

  

    // handleMove(e) {
    //     if(this.state.isDragging === true) {
    //         // console.log("Movement started")
    //         console.log(`Start position: ${this.state.startPos}`)
    //         const currentTranslate = this.state.prevTranslate + this.state.currentPosition - this.state.startPos

    //         this.setState({
    //             currentTranslate: currentTranslate
    //         })

    //         // this.getCurrentPosition(e)

    //         console.log(`Current translate: ${this.state.currentTranslate}`)

    //         this.animate()
            
    //     }
    // }


    // getCurrentPosition(e) {
    //     this.setState({
    //         currentPosition: this.getPositionX(e)
    //     })

    //     console.log(`Current Position: ${this.state.currentPosition}`)
    // }


    // handleTouchEnd(){
    //     console.log("end")
    //      this.setState({
    //          isDragging: false
    //      })
    // }

    // animate() {

    //         // const transform = `translateX(${this.state.currentTranslate}px)`;
    //         this.setSliderPosition()
            
    //         this.state.isDragging === true &&
                
    //             this.setState({
    //                 animationId: window.requestAnimationFrame(this.animate()),
    //                 // transform: `translateX(${this.state.currentTranslate}px)`
    //             })
    
    //             // console.log(`Transform value: ${this.state.transform}`)
    //     }
    

    //     setSliderPosition() {
    //        this.setState({
    //            transform: `translateX(${this.state.currentTranslate}px)`
    //        }) 

    //     //    console.log(`Transform value: ${this.state.transform}`)
    //     }


    // *******Original methods*******

    cancelDragEffect(event){
        event.preventDefault();
    }

    // // Touch event methods

    handleTouchEvent(event, index) {
         console.log("Touch started!")

        
         this.setState({
            currentIndex: index,
            isDragging: true,
            startPos: this.getPositionX(event)
         })

         console.log(`Start position: ${this.state.startPos}`)

         this.getPositionX(event)

         this.animate()
   
        
    }


    handleTouchMove(e) {
           
        // const currentPos = this.getPosition(e);

        if(this.state.isDragging === true) {
            console.log("Touch move")

            console.log(`Previous translate: ${this.state.prevTranslate}`)
            console.log(`Current position: ${this.state.currentPosition}`)
            console.log(`Start position: ${this.state.startPos}`)
            

            const currentTranslate = this.state.prevTranslate + this.state.currentPosition - this.state.startPos 
            


            this.setState({
                correntPosition: this.getCurrentPosition(e),
                currentTranslate: currentTranslate
            })

            // this.isDragging === false && this.setState({
            //     prevTranslate: this.currentTranslate
            // })
            
            console.log(`Current translate: ${currentTranslate}`)
            // this.state.currentTranslate = this.state.prevTranslate + this.state.currentPosition - this.state.startPos
        }else {
            this.setState({
                prevTranslate: this.state.currentTranslate
            })
        }
    }

    handleTouchEnd() {
        console.log("end")
        this.setState({
            isDragging: false
        })
    }

    getCurrentPosition(event){
        
        this.setState({
            currentPosition: this.getPositionX(event)
        })
    
    }




    getPositionX(event) {
        const positionX = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
        console.log(`PositionX: ${positionX}`)
        return positionX
    }


    animate() {

        this.setSliderPosition()
        
        this.state.isDragging === true &&
            
            this.setState({
                animationId: window.requestAnimationFrame(this.animate()),
            })

        console.log(`Transform value: ${this.state.transform}`)
    }

    setSliderPosition() {
       this.setState({
           transform: `translateX(${this.state.currentTranslate}px)`
       }) 
    }



    render() { 


        return ( 
            <div className="slider-container" style={{transform: `${this.state.transform}`}}
            
                // ********** New Methods *********
                // onDragStart={(e) => {this.cancelDragEffect(e)}}
                // onMouseDown={(e) => {this.handleTouch(e)}}
                // onMouseMove={(e) => {this.handleMove(e)}}
                // onMouseLeave={() => {this.handleTouchEnd()}}
                // onMouseUp={() => {this.handleTouchEnd()}}

                // onTouchStart={(event) => {this.handleTouch(event)}}
                // onTouchEnd={() => {this.handleTouchEnd()}}
                // onTouchMove={(e) => {this.handleMove(e)}}
            
                
                onDragStart={(e) => {this.cancelDragEffect(e)}} 
                onTouchStart={(event, index) => {this.handleTouchEvent(event, index)}}
                onTouchEnd={() => {this.handleTouchEnd()}}
                onTouchMove={(e) => {this.handleTouchMove(e)}}
                    
                onMouseDown={(event, index) => {this.handleTouchEvent(event, index)}}
                onMouseUp={() => {this.handleTouchEnd()}}
                onMouseLeave={() => {this.handleTouchEnd()}}
                onMouseMove={(e) => {this.handleTouchMove(e)}}
                onContextMenu={(e) => {e.preventDefault()}}

            >
                
                {this.state.slides.map((slide, index) => (
                    
                    <Slide key={index} index={index} subject={slide.subject} image={slide.image}/>        
                ))}
            </div>
         );
    }
}
 
export default Slider;