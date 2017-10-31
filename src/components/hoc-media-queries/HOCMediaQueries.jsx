import React, { Component } from 'react';

import { isMobile }         from '../../resources/methods/isMobile';

/**
* Hight-order component: checkScreenSize for media queries states
* 
* Check screen size and alter the state of screenType.
* The render will return a map of each children inside
* of this component with new parameter wich will update
* on every screen resize.
* @return {Component + state} props.screenType - boolean
*/
class HOCMediaQueries extends Component{
  state={screenType: false}

  componentWillMount(){
    window.addEventListener('resize', this.checkScreenSize);
    this.checkScreenSize();
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.checkScreenSize);
  }

  checkScreenSize = () =>{
    if(isMobile.any() || window.innerWidth <= 768){
      this.setState({screenType: true});
    }else{
      this.setState({screenType: false});
    }
  }

  render(){
    const {
      screenType
    } = this.state;
    return React.Children.map(this.props.children, children =>{
      return React.cloneElement(children, {
        screenType
      })
    })
  }
}
export default HOCMediaQueries;