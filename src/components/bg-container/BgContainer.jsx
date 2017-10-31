import React, { Component } from 'react';
import { object, string } from 'prop-types';
// Separate local imports from dependencies
import { Container, Video }from './BgContainer-style';


class BgContainer extends Component{

	static propTypes = {
			children: object,
			color: string,
			img: object,
			height: string,
			video: object,
			bgMobilePosition: string
	}
	static defaultProps = {
			color: "#999999"
	}

	render(){
		const {
				children,
				color,
				img,
				height,
				hero,
				video,
				bgMobilePosition
		} = this.props;

		if(video){
			return(
				<Container height={height} hero={hero}>
					<Video
						poster={video.poster} 
						playsInline  
						muted
          	autoPlay  
          	loop 
					>
						<source 
							src={video.mp4} 
							type="video/mp4" 
						/>
					</Video>
					{children}
				</Container>
			);
		}else{
			return (
				<Container color={color} img={img} height={height} hero={hero} bgMobilePosition={bgMobilePosition}>
						{children}
				</Container>
			)
		}
	}
}

export default BgContainer;