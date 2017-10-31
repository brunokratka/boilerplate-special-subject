import React, { Component } from 'react';
// import { type } from 'prop-types';
// Import styled components
import { 
  Wrapper,
  Curtain
} from './ImgCompare-style';

class ImgCompare extends Component{
  state = { curtainPosX: 50 }

  // define types of the properties
  // static propTypes = {
    
  // }

  // // Set default values of the properties
  // static defaultProps = {
    
  // }
  handleDrag = (e) => {
    console.log(e.currentTarget.offsetWidth);
    this.setState({
      curtainPosX: Math.ceil((e.pageX - e.currentTarget.offsetLeft) / e.currentTarget.offsetWidth * 100)
    })
  }

  render(){
    // Destructuring props and states
    const {
      background,
      foreground
    } = this.props;
    return(
       <Wrapper background={background} onMouseDown={this.handleDrag}>
        <Curtain
          foreground={foreground}
          position={this.state.curtainPosX}
        />
       </Wrapper>
    );
  }
}

export default ImgCompare;