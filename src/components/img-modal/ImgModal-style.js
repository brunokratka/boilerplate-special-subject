import styled from 'styled-components';
import { fonts } from '../../resources/styles/fonts';
import mediaQ from '../../resources/styles/breakpoints';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .container-img{
    position: relative;
    @media screen and (${mediaQ.mobilePortrait}) {
      width: 100vw;
      display: flex;
      justify-content: center;
      img{
        transform: scale(0.6);
      }
    }
    .more-details{
      cursor: pointer;
      width: 40px;
      height: 40px;
      display: flex;
      position: absolute;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      background-color: #009fe3;
      box-shadow: 0 0 10px 0 rgba(102, 197, 238, 0.91);
      &:nth-of-type(1){
        top: 0;
        left: 47%;
      }
      &:nth-of-type(2){
        top: 30px;
        right: 18%;
      }
      &:nth-of-type(3){
        top: 110px;
        right: 6%;
      }
      &:nth-of-type(4){
        top: 210px;
        left: 40%;
      }
      &:after, :before{
        font-size: 30px;
        color: #ffffff;
      }
      &:before{
        content: '+';
      }
      &.active{
        &:before{
          content: '-'
        }
      }
      @media screen and (${mediaQ.mobilePortrait}) {
        &:nth-of-type(1){
          top: 50px;
          left: 45%;
        }
        &:nth-of-type(2){
          top: 60px;
          right: 20%;
        }
        &:nth-of-type(3){
          top: 120px;
          right: 10%;
        }
        &:nth-of-type(4){
          top: 180px;
          left: 36%;
        }
      }
    }
  }
  .container-modal{
    width: 283px;
    height: 395px;
    display: flex;
    padding: 20px;
    color: #4a4a4a;
    font-size: 18px;
    line-height: 1.33;
    margin-left: 100px;
    position: relative;
    font-style: italic;
    align-items: center;
    border-radius: .3rem;
    background-color: #fff;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;
    border: 2px dotted #9b9b9b;
    &.active{
      border: 1px solid rgba(0,0,0,.2);
      .modal{
        &-header{
          text-transform: uppercase;
          display: flex;
          font-weight: bold;
          font-style: normal;
          align-items: center;
          justify-content: center;
        }
        &-body{
          display: flex;
          flex: 1 0 auto;
          position: relative;
          font-style: normal;
          align-items: center;
          font-weight: normal;
          flex-direction: column;
          justify-content: center;
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
    figure{
      margin: 1em 50px;
      img{
        width: 100%;
        object-fit: contain;
      }
    }
  }
`;
