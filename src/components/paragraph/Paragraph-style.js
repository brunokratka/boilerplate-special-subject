import styled from 'styled-components';
import { colors } from '../../resources/styles/colors';
import { fonts } from '../../resources/styles/fonts';
import mediaQ  from '../../resources/styles/breakpoints';

export const Text = styled.p`
  color: ${props => props.color ? props.color : '#000000'};
  text-align: justify;
  width: 100%;
  max-width: 45rem;
  ${props => props.eye && 'font-weight: 500; margin-bottom: 50px;'}
  font-size: ${props => props.eye ? '26px' : '21px'};
  line-height: ${props => props.eye ? '34px' :'1.48'};
  @media only screen and (${mediaQ.tabletPortrait}){
    padding: 0;
    font-size: ${props => props.eye ? '18px' : '16px'};
    line-height: ${props => props.eye ? '26px' :'24px'};
  }
  @media only screen and (${mediaQ.mobileLandscape}){
    ${props => props.eye && 'margin-bottom: 10px;'}
  }
  a{
    ${fonts.primary};
    color: ${colors.scarlet};
    font-size: 18px;
    font-weight: 900;
    line-height: 1.56;
    text-align: justify;
  }
`;