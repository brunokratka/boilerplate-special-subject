import React, { Component } from 'react';
import { string }           from 'prop-types';
// dependencies
import { Modal, Backdrop }  from './LaunchModal-style';

// const injectTapEventPlugin = require("react-tap-event-plugin");
// injectTapEventPlugin();
/**
* Component Image / Video - full in div
* @param {String} props.poster    - link for poster
* @param {String} props.webm      - link for webm
* @param {String} props.mp4       - link for mp4
* @param {String} props.title     - string title
* @param {String} props.subtitle  - string subtitle
*/
class LaunchModal extends Component{
  static proptypes = {
    data: string.isRequired
  }

  componentDidUpdate = () =>{
    if(this.props.stateOfModal){
      document.querySelector('body').classList.add('modal-open');
    }else{
      document.querySelector('body').classList.remove('modal-open');
    }
  }

  handleClose = (e) =>{
    this.props.isOpen(e, false);
  }

  render(){
    const {
      stateOfModal,
      data
    } = this.props;
    
    if(data){
      const content = JSON.parse(data);

      if(content.wall){
        return(
          <Backdrop className="fade show" onTouchEnd={this.handleClose}>
            <Modal className={stateOfModal ? 'fade show' : 'fade'}>
              <div className="modal-content">
                <div className="modal-header">
                    {content.title}  
                  <span className="close-modal" onTouchTap={this.handleClose}></span>
                </div>
                <div className="modal-body modal-wall">
                  <figure>
                    <img src={content.img} alt=""/>
                  </figure>
                  <span>{content.topNormalText}</span>
                  <p>{content.topBoldText}</p>            
                  <span>{content.bottomNormalText}</span>
                  <p>{content.bottomBoldText}</p>   
                </div>
              </div>
            </Modal>
          </Backdrop>
        );
      }
      return(
        <Backdrop className="fade show" onTouchEnd={this.handleClose}>
          <Modal className={stateOfModal ? 'fade show' : 'fade'}>
            <div className="modal-content">
              <div className="modal-header">
                  {content.title}  
                <span className="close-modal" onTouchTap={this.handleClose}></span>
              </div>
              <div className={"modal-body " + (content.figureOnly ? 'figure-only' : '')}>
                <figure className={(content.figureOnly ? 'figure-only' : '')}>
                  <img src={content.img} alt=""/>
                </figure>
                <p>{content.text}</p>
              </div>
            </div>
          </Modal>
        </Backdrop>
      );
    }
    return false
  }
}

export default LaunchModal;