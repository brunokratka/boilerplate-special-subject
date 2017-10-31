import React, { Component } from 'react';
import { number }           from 'prop-types';
import { isMobile }         from '../../resources/methods/isMobile';
// Separate local imports from dependencies
import { Container }        from './Banner-style';

class Banner extends Component{

  static propTypes = {
    bannerIndex: number.isRequired
  }

  componentDidMount = () => {
    if(window.EAS_load_fif){
      if(!isMobile.any()){
        window.EAS_load_fif(
          `bannerMateriaAbertaMegabox_id${this.props.bannerIndex}`, 
          null, 
          "//eas21.emediate.eu/eas?cu=25784;cre=mu;js=y;pageviewid=;target=_blank;EASTwordTarget=cesio30anos", 
          600, 
          300
        );
      }else{
        window.EAS_load_fif(
          `bannerMateriaAbertaMegaboxMobile_id${this.props.bannerIndex}`, 
          null, 
          "//eas21.emediate.eu/eas?cu=25783;cre=mu;js=y;pageviewid=;target=_blank;EASTwordTarget=cesio30anos", 
          300, 
          250
        );
      }
    }
  }

	render(){
    let banner = null;
    if(window.EAS_load_fif){
      if (!isMobile.any()) {
        banner = <div id={`bannerMateriaAbertaMegabox_id${this.props.bannerIndex}`}></div>;
      }else {
        banner = <div id={`bannerMateriaAbertaMegaboxMobile_id${this.props.bannerIndex}`}></div>;
      }
      return(
        <Container>
          {banner}
        </Container>
      )
    }
    return false;
  }
}

export default Banner;
