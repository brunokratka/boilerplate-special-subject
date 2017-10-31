import styled from 'styled-components';
import mediaQ  from '../../resources/styles/breakpoints';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  align-items: center;
  ${props => !props.fullWidth && `
  width: 100%;
  max-width: 960px;
  @media screen and (${mediaQ.tabletPortrait}) {
    padding: 0 20px;
    width: calc(100% - 40px);
  }
  `}
`;