import styled from 'styled-components';
import { colors } from '../../resources/styles/colors';
import mediaQ  from '../../resources/styles/breakpoints';

export const TimelineContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    position: relative;
    flex: 1 0 auto;
    justify-content: center;
    figure{
        margin: 0;
    }
    max-width:  960px;
       margin-top: 30px;
    @media only screen and (max-width: 568px){
        
    }
    @media only screen and (min-width: 48em) and (max-width: 64em){
       
    }
`
export const Line = styled.div`
    display: flex;
    flex-flow: column nowrap;
    position: relative;
    flex: 1 0 auto;
    height: 20px;
    padding: 20px 0;
    @media screen and (max-width: ${mediaQ.mobileLandscape}) {
        align-items: center;
    }
`

export const Time = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ffffff;
    border: solid 1px ${colors.darkGrey};
    z-index: 3;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:first-child{
        margin-left: 0;
    }
    &:last-child{
        margin-right: 0;
    }
    &.active{
        box-shadow: 0 0 10px 0px ${colors.primary};
        border-color: ${colors.primary};
        background-color: ${colors.primary};
    }
    span{
        margin-top: -90px;
        white-space: nowrap;
        @media screen and (max-width: ${mediaQ.mobilePortrait}) {
           white-space: inherit;
        }
    }
    @media only screen and (max-width: 568px){
        
    }
    @media only screen and (min-width: 48em) and (max-width: 64em){
        
    }
 `
export const TimeContainer = styled.div`
    display: flex;
    flex: 1 0 auto;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: ${mediaQ.mobileLandscape}) {
        width: 85%;
    }
`
const barDefault = `
    position: absolute;
    height: 2px;
    left: 0;
    margin: 9px 0;
`

export const ProgressBar = styled.div`
    ${barDefault}
    width: 100%;
    z-index: 2;
    transform: scaleX(${props => props.progress});
    transform-origin: 0;
    background-color: ${colors.primary};
    box-shadow: 0 0 10px 1px ${colors.primary};
    transition: transform 250ms cubic-bezier(.17,.67,.83,.67);
    @media screen and (max-width: ${mediaQ.mobileLandscape}) {
        left: 10%;
        width: 80%;
    }
`
export const BgBar = styled.div`
    ${barDefault}
    width: 100%;
    background-color: ${colors.darkGrey};
    @media screen and (max-width: ${mediaQ.mobileLandscape}) {
        left: 10%;
        width: 80%;
    }
`
export const LineContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Arrow = styled.button`
    border: solid 1px ${colors.primary};
    background-color: #FFFFFF;
    display: inline-flex;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    ${props => props.left ? `
        margin-right: 20px;
        `:
        `
        margin-left: 20px;
        `
    }
    cursor: pointer;
    box-shadow: 0 0 10px -2px ${colors.primary}, inset 0 0 10px -2px ${colors.primary};
    outline: 0;
    @media screen and (max-width: ${mediaQ.tabletPortrait}) {
      display: none;
    }
    &:before{
        content: "";
        width: 10px;
        height: 10px;
        border-right: solid 1px ${colors.primary};
        border-top: solid 1px ${colors.primary};
        ${props => props.left ? `
        transform: rotate(225deg) translate(-5px,5px);
        `:
        `
        transform: rotate(45deg) translate(2px,-2px);
        `
        }
    }
`