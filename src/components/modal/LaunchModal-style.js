import styled from 'styled-components';
import { fonts } from '../../resources/styles/fonts';
import mediaQ  from '../../resources/styles/breakpoints';

export const Modal = styled.div`
    width: 320px;
    height: 500px;
    min-height: 500px;
    border-radius: 3px;
    position: fixed;
    top: calc(50% - 250px);
    left: calc(50% - 160px);
    display: flex;
    overflow: hidden;
    outline: 0;
    @media screen and (${mediaQ.mobileLandscape}) {
       height: auto;
    }
    &.fade{
      opacity: 0;
      -webkit-transition: opacity .15s linear;
      -o-transition: opacity .15s linear;
      transition: opacity .15s linear;
      &.show{
        opacity: 1;
        overflow-x: hidden;
        overflow-y: auto;
        z-index: 1050;
      }
    }
    .modal-content{
      width: 100%;
      outline: 0;
      display: flex;
      position: relative;
      border-radius: .3rem;
      flex-direction: column;
      background-color: #fff;
      border: 1px solid rgba(0,0,0,.2);
      @media screen and (${mediaQ.mobileLandscape}) {
        overflow: auto;
      }
      .modal{
        &-header{
          text-transform: uppercase;
          display: flex;
          padding: 20px;
          font-size: 18px;
          font-weight: bold;
          align-items: center;
          justify-content: space-between;
          span{
            content: '';
            cursor: pointer;
            width: 35px;
            height: 35px;
            position: relative;
            border-radius: 50%;
            border: 1px solid #009fe3;
            -webkit-transition: all .15s ease-in;
            -o-transition: all .15s ease-in;
            transition: all .15s ease-in;
            &:hover{
              box-shadow: 0px 0px 8px 0px rgba(102, 197, 238, 0.91);
              &:before, :after{
              box-shadow: 0px 0px 8px 0px rgba(102, 197, 238, 0.91);
              }
            }
            &:before, :after{
              content: '';
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              width: 1px;
              height: 23px;
              margin: auto;
              position: absolute;
              background-color: #009fe3;
            }
            &:before{
              transform: rotate(46deg);
            }
            &:after{
              transform: rotate(-46deg);
            }
          }
        }
        &-body{
          display: flex;
          flex: 1 0 auto;
          padding: 10px;
          position: relative;
          align-items: center;
          flex-direction: column;
          justify-content: space-around;
          figure{
            margin: 1em 50px;
            img{
              width: 100%;
              max-width: 161px;
              object-fit: contain;
            }
          }
          p{
            font-size: 18px;
            line-height: 1.44;
          }
        }
        &-wall{
          span{
              ${fonts.primary};
              font-size: 18px;
              line-height: 1.33;
              color: #5d5d5d;
            &:last-of-type{
              font-family: Roboto;
              font-size: 18px;
              font-weight: 500;
              color: #5d5d5d;
              margin-top: 20px;
            }
          }
          p{
            ${fonts.secondary};
            font-size: 24px;
            line-height: 1.25;
            text-align: center;
            color: #000000;
            margin: 5px;
          }
          figure{
            margin: 1em 90px;
          }
        }
      }
    }
`
export const Backdrop = styled.div`
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1040;
    position: fixed;
    background-color: rgba(0,0,0,0.5);
    &.fade{
      // opacity: 0;
      transition: opacity .15s linear;
    }
    &.show{
      // opacity: .5;
    }
`

export const Title = styled.h1`

`
export const Subtitle = styled.h3`
 
`