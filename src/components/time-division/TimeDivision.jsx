import React, { Component }   from 'react';
import { Link }               from 'react-router-dom';
// import { string }             from 'prop-types';

import BgContainer 	  from '../../components/bg-container/BgContainer.jsx';
import { Container }  from './TimeDivision-style';

class TimeDivision extends Component{

  render(){
    const { 
      pastImg,
      presentImg,
      futureImg
    } = this.props;
    return(
      <Container>

      <div className="time-division">

        <div>
          <Link to="/ontem">
          <span>ontem</span>
            <BgContainer 
              color="#ffffff"
              img={{url: `${pastImg}`, repeat: false, position: '60%'}}
            >
            </BgContainer>
          </Link>
        </div>

        <div>
          <Link to="/hoje">
          <span>hoje</span>
            <BgContainer 
              color="#ffffff"
              img={{url: `${presentImg}`, repeat: false, position: 'right'}}
            >
            </BgContainer>
          </Link>
        </div>

        <div>
          <Link to="/amanha">
          <span>amanhã</span>
            <BgContainer 
              color="#ffffff"
              img={{url: `${futureImg}`, repeat: false, position: '70%'}}
            >
            </BgContainer>
          </Link>
        </div>

      </div>

      </Container>
    );
  }

}

export default TimeDivision;