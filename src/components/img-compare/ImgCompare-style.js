import styled from 'styled-components';

const commonBg = `
  background-size: cover;
  background-position: left center;
  background-repeat: no-repeat;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: ${props => props.aspectRatio && (props.aspectRatio[1] / props.aspectRatio[0]) * 100}%;
  background: url(${props => props.background});
  display: inline-block;
  ${commonBg}
`;

export const Hook = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.72);
  top: calc(50% - 6px);
  left: calc(${props => props.position}% - 6px);
  z-index: 2;
  cursor: pointer;
  ${props => !props.transition && `transition: left 300ms ease;`}
  &:after, &:before{
    content: '';
    padding: 10px;
    position: absolute;
    border: solid transparent;
    border-width: 20px 20px 0 0;
    box-shadow: -3px 3px 0 0 rgba(255, 255, 255, 0.72) inset;
  }
  &:before{
    margin-top: -12px;
    margin-left: -34px;
    transform: rotate(225deg);
  }
  &:after{
    margin-top: -12px;
    margin-left: 10px;
    transform: rotate(45deg);
  }
  &:hover{
    background-color: #ffffff;
  }
  &:hover:before, &:hover:after{
    box-shadow: -3px 3px 0 0 #ffffff inset;
  }
`;
  
export const Curtain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: url(${props => props.foreground});
  width: ${props => props.position}%;
  height: 100%;
  ${props => !props.transition && `transition: width 300ms ease;`}
  ${commonBg}
  z-index: 1;
  border-right: solid 2px #ffffff;
`;