import styled from 'styled-components';
import { fonts } from '../../resources/styles/fonts';
import mediaQ  from '../../resources/styles/breakpoints';

export const SectionTitle = styled.h3`
  font-size: 47px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  white-space: pre-line;
  color: ${props => props.color};
  @media only screen and (${mediaQ.tabletPortrait}){
    font-size: 24px;
  }
`;
export const BoldTitle = styled.div`
  font-size: 29px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: ${props => props.color};
  @media only screen and (${mediaQ.tabletPortrait}){
    font-size: 24px;
    text-align: center;
  }
`;

export const PageTitle = styled.h1`
  ${fonts.secondary};
  margin: 0;
  z-index: 2;
  font-size: 76px;
  line-height: 91px;
  position: relative;
  color: ${props => props.color};
  @media only screen and (${mediaQ.tabletPortrait}){
    font-size: 36px;
    line-height: 43px;
  }
  @media only screen and (min-width: 48em) and (max-width: 64em){
    font-size: 47px;
    line-height: 56px;
  }
`

export const PageSubtitle = styled.p`
  z-index: 2;
  font-size: 29px;
  white-space: pre-line;
  position: relative;
  ${props => props.color &&`
    color: ${props.color};
  `}
  ${props => props.fontStyle &&`
    font-style: ${props.fontStyle ?
      props.fontStyle :
      'italic'
    };
  `}
  ${props => props.fontWeight &&`
    font-weight: ${props.fontWeight ?
      props.fontWeight :
      'normal'
    };
  `}
  @media only screen and (${mediaQ.tabletPortrait}){
    font-size: 22px;
  }
`
export const NextSection = styled.p`
  ${fonts.primary};
  font-size: 29px;
  font-style: italic;
  ${props => props.color &&`
    color: ${props.color};
  `}
`