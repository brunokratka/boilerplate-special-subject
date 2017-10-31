import React, { Component } from 'react';
import { array } from 'prop-types'

//Import local
import { 
  Container,
  Button,
  Arrow, 
  Row,
  Col,
  Funcao,
  Nome, 
  Colaborador 
} from './Expediente-style.js';

export default class Expediente extends Component {
  state = { open: false }

  static propTypes = {
    exped: array
  }

  handleToggle = (e) => {
    const target = e.target.offsetTop;
    const { open } = this.state;
    this.setState({  open: !open  })
    if(!open){
      setTimeout(function(){
        window.scrollTo(0, target);
      }, 50);
    }
  }

  renderCollaborators = () => {
    return this.props.data.map(function(dept, index) {
      return (
        <Row key={index}>
          <Col>
            {dept.colaboradores.map((collaborator, index) => {
              return (
                <Colaborador key={index}>
                  <Funcao>{collaborator.funcao}</Funcao>  
                  <Nome key={index}>{collaborator.nome}</Nome>     
                </Colaborador>
              )
            }
            )}
          </Col>
        </Row>
      );
    });
  }

  render() {

    return ( 
      <Container> 
        <Button onClick={this.handleToggle}>
          <span>EXPEDIENTE</span>
          <Arrow open={this.state.open}/> 
        </Button>
        {
          this.state.open
            ?
              <div>
                <div>
                  {this.renderCollaborators()}
                </div> 
              </div>
            : null
        }
      </Container>  
    )
  }
}