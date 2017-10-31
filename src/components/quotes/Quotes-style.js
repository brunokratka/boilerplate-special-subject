import styled from 'styled-components';
import { colors } from '../../resources/styles/colors';
import mediaQ  from '../../resources/styles/breakpoints';

export const Container = styled.blockquote`
  display: flex;
  flex-direction: column;
  margin: 0;
  border-left: 15px solid ${colors.primary};
  @media only screen and (${mediaQ.tabletPortrait}){
    border-width: 5px;
  }
`;
export const QuotedText = styled.q`
  font-size: 23px;
  line-height: 34px;
  text-align: left;
  padding: 40px 0 20px 44px;
  @media only screen and (${mediaQ.tabletPortrait}){
    margin-left: 20px;
    padding: 20px 0 20px 15px;
    font-size: 16px;
    line-height: 24px;
  }
  `;
  export const Author = styled.cite`
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  text-align: right;
  @media only screen and (${mediaQ.tabletPortrait}){
    font-size: 16px;
  }
`;
