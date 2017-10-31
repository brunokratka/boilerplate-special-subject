import React, { Component }   from 'react';
// import { string }             from 'prop-types';
// methods
import { isMobile }           from '../../resources/methods/isMobile';
// dependencies
import LaunchModal            from '../modal/LaunchModal.jsx';
import { Container }          from './ImgModal-style';

class ImgModal extends Component{
  constructor(props){
    super(props);

    this.state = {
      isModalOpen: false,
      structText: '',
      structDetails: 'Clique nos botões (+) para saber mais detalhes sobre a estrutura que guarda a cápsula e os rejeitos.'
    };
  }

  renderSources = () => {
    return this.props.data.map((content, index) => {
      return (
        <span
          key={index} 
          icon={this.state.icon}
          className="more-details"
          onTouchTap={ e => this.handClick(e, content)}
        >
        </ span>
      )
    })
  }

  handClick = (e, content) => {
      const { 
        structDetails
      } = this.state;
    if (content) {
      if(document.querySelector('.more-details.active') && !e.target.classList.contains('active')){
        document.querySelector('.more-details.active').classList.remove('active');
        e.target.classList.toggle('active');
        const data = JSON.stringify(content);
        this.setState({
          isModalOpen: true,
          currentContent: data,
          structText: JSON.parse(data)
        });
      }else if(!document.querySelector('.more-details.active')){
        e.target.classList.toggle('active');
        const data = JSON.stringify(content);
        this.setState({
          isModalOpen: true,
          currentContent: data,
          structText: JSON.parse(data)
        });
      }else{
        document.querySelector('.more-details.active').classList.remove('active');
        this.setState({
          isModalOpen: false,
          currentContent: null,
          structText: structDetails
        });
      }
    }else{
      if(e.target === e.currentTarget){
        this.setState({
          isModalOpen: false,
          currentContent: null,
          structText: structDetails
        });
        if(document.querySelector('.more-details.active')){
          document.querySelector('.more-details.active').classList.remove('active');
        }
      }
    }
  }

  render(){
    const { 
      structText,
      isModalOpen, 
      structDetails,
      currentContent
    } = this.state;
    return(
      <Container>
        
        <div className="container-img">
          <img src={`${process.env.PUBLIC_URL}/img/image-modal/deposito-nuclear-com-manilha.png`} alt='Depósito nuclear com manilha'/> 
          {this.renderSources()} 
        </div>

        {!isModalOpen && !isMobile.any() &&
          <div className="container-modal">
            <span>{structDetails}</span>
          </div>
        }

        {isModalOpen && !isMobile.any() && structText.wall &&
          <div className="container-modal active">
            <div className="modal-header">
              <span>{structText.title}</span>            
            </div>
            <div className="modal-body modal-wall">
              <figure>
                <img src={structText.img} alt=""/>
              </figure>
              <span>{structText.topNormalText}</span>
              <p>{structText.topBoldText}</p>            
              <span>{structText.bottomNormalText}</span>
              <p>{structText.bottomBoldText}</p>            
            </div>
          </div>
        }
        {isModalOpen && !isMobile.any() && structText.wall === false &&
          <div className={"container-modal active " + (structText.figureOnly ? 'figure-only' : '')}>
            <div className="modal-header">
              <span>{structText.title}</span>            
            </div>
            <div className="modal-body">
              <figure>
                <img src={structText.img} alt=""/>
              </figure>
              <span>{structText.text}</span>            
            </div>
          </div>
        }

        {isMobile.any() &&
          <LaunchModal 
            stateOfModal={isModalOpen}
            isOpen={(e, close) => this.handClick(e, close)}
            data={currentContent}
          />
        }



      </Container>
    );
  }

}

export default ImgModal;