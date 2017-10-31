import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  
`

export const Controls = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  cursor: pointer;
  z-index: 1;
  ${props => props.playing && `
    opacity: 0;
    &:hover{
      opacity: 1;
    }
  `};
`

export const Play = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: #999;
  border-radius: 50%;
  left: calc(50% - 50px);
  top: calc(50% - 50px);
  ${props => props.playing ? `
    &:before{
      content: "";
      position: absolute;
      border-radius: 0;
      width: 0;
      height: 0;
      width: 8px;
      height: 40px;
      border-left: solid 16px #FFFFFF;
      border-right: solid 16px #FFFFFF;
      left: calc(50% - 20px);
      top: calc(50% - 20px);
    }
  ` : `
    &:before{
      content: "";
      position: absolute;
      border-radius: 0;
      width: 0;
      height: 0;
      border-top: solid 35px transparent;
      border-bottom: solid 35px transparent;
      border-left: solid 35px #FFFFFF;
      left: calc(50% - 15px);
      top: calc(50% - 35px);
      transform: scaleY(0.6);
    }
  `};
`

export const Video = styled.video`
  width: 100%;
`