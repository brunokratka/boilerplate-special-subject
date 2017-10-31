import React, { Component } from 'react';
// import { type } from 'prop-types';
// Import styled components
import { 
  Wrapper,
  Hook,
  Curtain
} from './ImgCompare-style';

class ImgCompare extends Component{
  state = { curtainPosX: 50, dragging: false, touching: false }

  setDragFlag = (dragging) => {
    this.setState({
      dragging
    })
  }
  
  setTouchFlag = (touching) => {
    this.setState({
      touching
    })
  }
  
  handleDrag = (e, dragging) => {
    let curtainPosX;
    if(dragging){
      if(e.touches){
        if(e.touches[0].target.getAttribute('name') !== 'wrapper'){
          curtainPosX = 
          ((e.touches[0].clientX - e.touches[0].target.parentElement.offsetLeft) / 
          e.touches[0].target.parentElement.offsetWidth) * 100
        }else{
          curtainPosX = 
          ((e.touches[0].clientX - e.touches[0].target.offsetLeft) / 
          e.touches[0].target.offsetWidth) * 100
        }
      }else{
        curtainPosX = 
          (e.pageX - e.currentTarget.offsetLeft) / 
            e.currentTarget.offsetWidth * 100;
      }
      if(curtainPosX > 100){
        curtainPosX = 100
      }
      if(curtainPosX < 0){
        curtainPosX = 0
      }
      this.setState({
        curtainPosX
      })
    }
  }

  render(){
    // Destructuring props and states
    const {
      background,
      foreground,
      aspectRatio
    } = this.props;
    const {
      curtainPosX,
      dragging,
      touching
    } = this.state;
    return(
       <Wrapper
        name="wrapper"
        aspectRatio={aspectRatio}
        background={background}
        onMouseMove={(e) => this.handleDrag(e,dragging)}
        onClick={(e) => this.handleDrag(e,true)}
        onMouseUp={() => this.setDragFlag(false)}
        onMouseDown={() => this.setDragFlag(true)}
        onTouchMove={(e) => this.handleDrag(e, true)}
        onTouchStart={() => this.setTouchFlag(true)}
        onTouchEnd={() => this.setTouchFlag(false)}
      >
        <Hook
          position={curtainPosX}
          transition={dragging || touching}
        />
        <Curtain
          transition={dragging || touching}
          foreground={foreground}
          position={curtainPosX}
        />
       </Wrapper>
    );
  }
}

export default ImgCompare;