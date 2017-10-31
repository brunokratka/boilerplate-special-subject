import styled from 'styled-components';
import { fonts } from '../../resources/styles/fonts';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  overflow: hidden;
  position: relative;
  align-items: center;
  justify-content: center;
`
export const Video = styled.video`
  top: 0;
  left: 0;
  width: 100%;
  position: absolute;
  transition: 1s opacity;
  -webkit-transition: 1s opacity;
  height: 100%;
  object-fit: cover;
`
export const Content = styled.div`
    z-index: 2;
    padding: 0 30px;
`

export const Title = styled.h1`
  ${fonts.secondary};
  font-size: 76px;
  line-height: 91px;
  @media only screen and (max-width: 568px){
    font-size: 36px;
    line-height: 43px;
  }
  @media only screen and (min-width: 48em) and (max-width: 64em){
    font-size: 47px;
    line-height: 56px;
  }
`
export const Subtitle = styled.p`
font-size: 29px;
@media only screen and (max-width: 568px){
  font-size: 22px;
}
`