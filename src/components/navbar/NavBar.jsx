import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink} from 'react-router-dom';
import { string, array } from 'prop-types';

// dependencies
import { 
  Nav,
  Especial,
  LinkList,
  LogoContainer,
  MenuButton,
  Bar,
  Logo }    from './NavBar-style';

// import productlogo
import opopLogo from '../../resources/img/opopular-white.svg';
  
export default class NavBar extends Component {
  state = { expanded: false }

  static defaultProps = {
    especial: string,
    links:  array
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false);
  }

  handleClickOutside = e => {
    if(!ReactDOM.findDOMNode(this).contains(e.target)) {
      this.setState({
        expanded: false
      });
    }
  }

  renderLinks = links => {
    return links.map((link, index) => {
      return (
        <li key={index}  onClick={this.toggle.bind(this)}>
          <NavLink
            activeClassName="active"
            to={link.path}
          >
            <span>{link.name}</span>
          </NavLink>
        </li>
      )
    })
  };

  toggle = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  render() {
    return (
      <Nav>
        <LogoContainer>
          <span>ESPECIAIS</span>
          <Logo>
            <a href="https://www.opopular.com.br/">
              {<img src={opopLogo} alt="O Popular"/>}
            </a>
          </Logo>
          <Especial>
            <NavLink to='/'>
              <img src={this.props.especial} alt="Especial césio"/>
            </NavLink>
          </Especial>
        </LogoContainer>
        <MenuButton onClick={this.toggle.bind(this)}>
          <Bar expanded={this.state.expanded} />
        </MenuButton>
        <LinkList 
          expanded={this.state.expanded} 
          onClick={this.handleClickOutside}
        >
          {this.renderLinks(this.props.links)}
        </LinkList>
      </Nav>
    )
  }
}