import React, { Component } from 'react';
import { string }           from 'prop-types';
// dependencies
import { Container }        from './VideoYoutube-style';

/**
* Component Video
* @param {String} props.sources
* @param {String} props.sources
*/

class VideoYoutube extends Component{

  static propTypes = {
    videoID: string.isRequired,
    title: string.isRequired
  }

  render(){
    const {
      videoID,
      title
    } = this.props;
    return(
      <Container>
        <div className="video-container">
          <iframe  
            src={`https://www.youtube.com/embed/${videoID}`} 
            frameBorder="0" 
            allowFullScreen 
            title={title}
          ></iframe>
        </div>
      </Container>
    );
  }

}

export default VideoYoutube;