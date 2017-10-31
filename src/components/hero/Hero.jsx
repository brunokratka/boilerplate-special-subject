import React, { Component } from 'react';
import { string }           from 'prop-types';
// dependencies
import { 
  Container, 
  Video, 
  Content, 
  Title, 
  Subtitle } from './Hero-style';

/**
* Component Image / Video - full in div
* @param {String} props.poster    - link for poster
* @param {String} props.webm      - link for webm
* @param {String} props.mp4       - link for mp4
* @param {String} props.title     - string title
* @param {String} props.subtitle  - string subtitle
*/
class Hero extends Component{

  static propTypes = {
    webm: string.isRequired,
    mp4: string.isRequired,
    title: string.isRequired,
    subtitle: string.isRequired
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

  render(){
    return(
      <Container className="video-detail center-xs">
        <Video 
          poster={this.props.poster}
          playsInline 
          autoPlay 
          loop
        >
          {this.renderSources()}
          Your browser does not support the video tag.
        </Video>
        <Content>
          <Title>
            {this.props.title}
          </Title>
          <Subtitle>
            {this.props.subtitle}
          </Subtitle>
        </Content>
      </Container>
    );
  }
}

export default Hero;