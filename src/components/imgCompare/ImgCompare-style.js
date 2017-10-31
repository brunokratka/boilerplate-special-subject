import styled from 'styled-components';
const commonBg = `
  background-size: auto 100%;
  background-position: left center;
  height: 300px;
  background-repeat: no-repeat;
  `;
  export const Wrapper = styled.div`
  width: 480px;
  background: url(${props => props.background});
  display: inline-block;
  ${commonBg}
`;

export const Curtain = styled.div`
  background: url(${props => props.foreground});
  width: ${props => props.position}%;
  transition: width 300ms ease;
  ${commonBg}
`;