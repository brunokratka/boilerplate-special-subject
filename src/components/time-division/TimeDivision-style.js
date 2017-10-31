import styled from 'styled-components';
import { fonts } from '../../resources/styles/fonts';
import { breakpoints } from '../../resources/styles/breakpoints';

export const Container = styled.div`
  .time-division{
    display: flex;
    justify-content: center;
    flex-direction: row;
    @media screen and (${mediaQ.tabletPortrait}) {
      flex-direction: column;
    }
    div{
      display: flex;
      flex-grow: 1;
      width: 100%;
      height: 100vh;
      align-items: center;
      background-size: cover;
      justify-content: center;
      ${fonts.primary};
      position: relative;
      font-size: 47px;
      font-weight: bold;
      letter-spacing: 5px;
      text-transform: uppercase;
      color: #ffffff;
      overflow: hidden;
      background-color: #000000;
      transition: all 0.4s;
      @media screen and (${mediaQ.tabletLandscape}) {
        font-size: 29px;
        letter-spacing: 3.1px;
      }
      @media screen and (${mediaQ.tabletPortrait}) {
        height: 342px;
      }
      @media screen and (${mediaQ.mobileLandscape}) {
        font-size: 22px;
        font-weight: bold;
        letter-spacing: 2.1px;
        height: 190px;
      }
      div{
        opacity: 0.45;
        transform: scale(1);
        transition: .3s ease-in-out;
        &:hover{
          opacity: 1;
	        transform: scale(1.3);
        }
      }
      a{
        width: 100%;
        text-decoration: none;
        span{
          left: 0;
          width: 100%;
          z-index: 2;
          color: #ffffff;
          line-height: 58px;
          position: absolute;
          top: calc(50% - 29px);
          &:hover + div{
              opacity: 1;
              transform: scale(1.3);
          }
        }
      }
    }
  }
`