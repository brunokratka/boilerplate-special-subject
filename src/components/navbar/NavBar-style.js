import styled from 'styled-components';
import mediaQ  from '../../resources/styles/breakpoints';

export const Nav = styled.nav`
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-basis: 100%;
  background-color: #164194;
  height: 70px;
  padding: 0 30px;
  position: fixed;
  width: calc(100% - 60px);
  top: 0;
  left: 0;
  z-index: 10;
  color: #FFF;
  a{
    color: #FFF;
    text-decoration: none;
  }
  @media screen and (${mediaQ.tabletPortrait}) {
    padding: 0 10px;
    width: calc(100% - 20px);
  }
`;

export const LinkList = styled.ul`
  align-self: 
  padding: 0;
  color: #FFF;
  display: flex;
  margin: 20px 0;
  list-style: none;
  justify-content: space-between;
  a{
    color: #FFF;
    margin: 0 10px;
    text-decoration: none;
    &.active{
      color: #66c5ee;
      font-weight: bold;
      padding-bottom: 21px; 
      border-bottom: 5px solid #66c5ee; 
    }
  }
  li{
      text-transform: uppercase;
      border-right: 2px solid #FFF;
      &:last-child{ border-right: none; }
  }

  @media screen and (${mediaQ.tabletPortrait}) {
    left: 0;
    right: 0;
    height: 0;
    top: 70px;
    margin: 0;
    padding: 0;
    z-index: 9;
    display: flex;
    overflow: hidden;
    position: absolute;
    flex-direction: column;
    justify-content: space-around;
    background-color: #66C5EE;
    transition: height .3s ease;
    ${props => props.expanded && `
      height: 130px;
      padding: 20px 0;
    `}
    a{
      display: flex;
      color: #00499B;
      justify-content: center;
      &.active{
        color: #00499B;
        font-weight: bold;
        padding-bottom: 0px; 
        span{
          border-bottom: 3px solid #00499B; 
        }
      }
    }
    li{
      font-size: 18px;
      font-weight: bold;
      border-right: 0;
      padding: 10px 0;
      &:last-child{ border-right: none; }
    }
  }
`;

export const LogoContainer = styled.div`
  color: #FFF;
  display: flex;
  height: 100%;
  align-items: center;
  span{
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    span{
      font-size: 10px;
    }
  }
`;

export const Logo = styled.div`
    margin-left: 8px;
    max-height: 40px;
    height: 100%;
    padding-right: 20px;
    border-right: 2px solid #FFF;
    img{
      width: 100%;
      height: 100%;
    }
    @media screen and (max-width: 768px) {
        padding-right: 10px;
    }
    @media screen and (max-width: 420px) {
        padding-right: 10px;
        width: 50%;
    }
`;

export const Especial = styled.div`
    max-height: 50px;
    height: 100%;
    margin: 0 20px;
    display: flex;
    align-items: center;
    img{
      width: 100%;
    }
    @media screen and (max-width: 768px) {
      margin: 0 20px
    }
    @media screen and (max-width: 420px) {
      margin: 0 20px;
      width: 70%;
    }
`;
export const MenuButton = styled.button`
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      background-color: transparent;
      border-radius: 0px;
      border: none;
      color: #FFF;
      height: 48px;
      margin: 0px;
      padding: 0px;
      width: 48px;
      transition: all 0.3s;
      &:hover, &:focus, &:active {
        outline: none;
      }
    }
`;

export const Bar = styled.span`
  background-color: #FFF;
  width: 35px;
  height: 4px;
  margin: 4px auto;
  border-radius: 3px;
  display: block;
  position: relative;
  transition: all 0.3s;
  backface-visibility: hidden;
  &:before, &:after{
    content: '';
    background-color: #FFF;
    border-radius: 3px;
    width: 35px;
    height: 4px;
    margin: 4px auto;
    position: absolute;
    transition: all 0.3s;
    backface-visibility: hidden;
  }
  ${props => props.expanded && `
    background-color: transparent;
    transition: .2s;

    &:before {
      transform: rotate(45deg) translate(4px, 9px);
      transition: .3s;
      width: 35px;
      left: 1px;
    }
    &:after {
      transform: rotate(-45deg) translate(3px, -7px);
      transition: .3s;
      width: 35px;
      left: 1px;
    }
  `}
  &:before{
    top: -12px;
    left: 0px;
  }
  &:after{
    bottom: -12px;
    left: 0px;
  }
`;