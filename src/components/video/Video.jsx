import React, { Component } from 'react';
import { string, arrayOf }           from 'prop-types';
// dependencies
import { Container, Controls, Video, Play }        from './Video-style';

/**
* Component Video
* @param {[String]} props.sources
*/

class VideoPlayer extends Component{
  state = {
    playing: false
  }

  static propTypes = {
    sources: arrayOf(string).isRequired
  }

  renderSources = () => {
    return this.props.sources.map((source, index) => {
      return (
        <source 
          src={source} 
          type={`video/${source.slice(source.lastIndexOf('.') + 1)}`}
          key={index}
        />)
    })
  }

  togglePlay = () => {
    const video = document.getElementById('teste')
    const { playing } = this.state;
    this.setState({playing: !playing});
    if(playing){
      video.pause();
    }else{
      video.play();
      const self = this;
      video.addEventListener('ended', function(){
        video.currentTime = 0;
        self.setState({playing: false});
      }, false);
    }
  }

  toggleFullscreen = () => {
    
  }

  render(){
    const { playing } = this.state;
    return(
      <Container>
        <Controls 
          onClick={this.togglePlay.bind("teste")}
          playing={playing}
        >
         <Play playing={playing}/>
        </Controls>
        <Video id="teste">
          {this.renderSources()}
          Your browser does not support the video tag.
        </Video>
      </Container>
    );
  }

}

export default VideoPlayer;