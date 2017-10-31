import styled from 'styled-components';
import { breakpoints }  from '../../resources/styles/breakpoints';

export const Container = styled.div`
  display: flex;
	justify-content: center;
  position: relative;
  margin: 60px 0;
  div{
    width: 600px;
    height: 300px;
    border: 1px solid rgba(0,0,0,.2);
    @media screen and (max-width: ${breakpoints.tabletPortrait}) {
      width: 300px !important;
      height: 250px !important;
    }
  }
`