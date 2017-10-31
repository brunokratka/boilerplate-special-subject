import styled from "styled-components";
import mediaQ from "../../resources/styles/breakpoints";

export const Wrapper = styled.div`
  margin-right: 20px;
  ${props => {
    if (props.desktop) {
      return `
      width: calc((100% * ${props.desktop}) ${props.desktop &&
        ` - ${10 / props.desktop - 10}px`});
      `;
    }
  }} 
  ${props => {
    if (props.tablet) {
      return `
      @media screen and (${mediaQ.tabletPortrait}){
        width: calc((100% * ${props.tablet}) ${(props.tablet ||
        props.tablet !== 1) &&
        ` - ${10 / props.tablet - 10}px`});
        ${props.tablet === 1 && `margin-right: 0;`}
      }
    `;
    }
  }} 
  ${props => {
    if (props.phone) {
      return `
    @media screen and (${mediaQ.mobilePortrait}){
      width: calc((100% * ${props.phone}) ${props.phone &&
        ` - ${10 / props.mobile - 10}px`});
      ${props.phone === 1 && `margin-right: 0;`}
    }
        `;
    }
  }};
`;
