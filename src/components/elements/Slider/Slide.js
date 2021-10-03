import React, { Component } from 'react';

import './Slider.css';

class Slide extends Component {
    
    constructor(props){
        super(props);

        this.state={
            currentIndex: 0,
            mouseIsClicked: false,
            className: ''
        }
    }

    handleTouchEvent(event, index) {
        this.setState({
            currentIndex: index,
            mouseIsClicked: true
        }) 

        console.log(event)
        
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


    // 

    
    
    render() { 
        
        
        return ( 
            <div className="slide" key={this.props.id} 
                index={this.props.index}
                onMouseDown={(event, index) => this.handleTouchEvent(event, index)}> 
                
                <div className="demo-content">
                    <img className="demo-image" alt="Lesson" 
                    // style={{transform: `${this.state.transform}`}}
                    src={this.props.image} 
                    >
                    
                    </img>
                    
                </div>
                <div className="slide-tag">
                    <h4>{this.props.subject}</h4>
                </div>
            </div>
         );
    }
}
 
export default Slide;