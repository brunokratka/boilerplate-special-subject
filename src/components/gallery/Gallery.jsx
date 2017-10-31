import React, { Component } from 'react';
import Masonry              from 'react-masonry-infinite';
import Lightbox             from 'react-image-lightbox';
// methods
import { scrollCheck }      from '../../resources/methods/scrollCheck';
// dependencies
import './Gallery.css';
import { Card }             from './Gallery-style';

const sizes =  [
  { columns: 1, gutter: 15 }, 
  { mq: '768px', columns: 2, gutter: 15 }, 
  { mq: '1336px', columns: 2, gutter: 15 },
  { mq: '1680px', columns: 3, gutter: 15 }
];

class Gallery extends Component{
  constructor(props){
    super(props);

    this.state = {
      hasMore: false,
      elements: [],
      animate: '',
      isOpen: false,
      photoIndex: 0
    }
  };

  generateElements = () => {
    return this.props.images.map(image => {
      return{
        image: image.img,
        description: image.description,
        height: (parseInt(Math.random() * (9.9 - 4) + 4, 10)) * 50
      }
    });
  }

  componentWillMount = () =>  {
    this.setState({
      elements: this.generateElements()
    });
  }

  componentDidMount = () =>  {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () =>  {
    window.removeEventListener('scroll', this.handleScroll);
  }

  //Monitora scroll para o evento de animação
  handleScroll = () =>  {
    scrollCheck('.masonry', 55, () => {
      this.setState({ animate: 'animate' });
      window.removeEventListener('scroll', this.handleScroll);
    });
  }

  openLightBox = (event, index) => {
    this.setState({
      isOpen: true,
      photoIndex: index
    })
  }

  render() {
    const {
      animate,
      isOpen,
      photoIndex,
      elements,
      hasMore
    } = this.state;
    return (
      <div>
        <Masonry
          className="masonry"
          hasMore={hasMore}
          loadMore={() => this.setState( { elements: elements.concat(this.generateElements()) } )}
          sizes={sizes}
          loader={
            <div className="sk-folding-cube">
              <div className="sk-cube1 sk-cube" />
              <div className="sk-cube2 sk-cube" />
              <div className="sk-cube4 sk-cube" />
              <div className="sk-cube3 sk-cube" />
            </div>
          }
        >
          { elements.length > 0 &&
            elements.map(({ key, image, description, height }, index, img) => (
              
              <Card 
                key={index} 
                className={`card ${animate}`} 
                style={{ height }}
                onClick={event => this.openLightBox(event,index)}
              >
                <img src={image} alt=""/> 
                <div>
                  <span>{description}</span>
                </div>  
              </Card>
            ))
          }
        </Masonry>
        {isOpen &&
              <Lightbox
                  mainSrc={elements[photoIndex].image}
                  nextSrc={elements[(photoIndex + 1) % elements.length].image}
                  prevSrc={elements[(photoIndex + elements.length - 1) % elements.length].image}
                  imageCaption={elements[photoIndex].description}

                  onCloseRequest={() => this.setState({ isOpen: false })}
                  onMovePrevRequest={() => this.setState({
                      photoIndex: (photoIndex + elements.length - 1) % elements.length,
                  })}
                  onMoveNextRequest={() => this.setState({
                      photoIndex: (photoIndex + 1) % elements.length,
                  })}
              />
          }
      </div>
    );
  }

}

export default Gallery;