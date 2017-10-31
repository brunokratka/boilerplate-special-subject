import styled           from 'styled-components';
import mediaQ           from '../../resources/styles/breakpoints';
import { colors }       from '../../resources/styles/colors';

export const Figure = styled.figure`
    width: ${props => props.imgWidth ? `${props.imgWidth}` : `auto`};
    height: ${props => props.imgHeight ? `${props.imgHeight}` : `auto`};
    display: flex;
    
    @media screen and (${mediaQ.mobilePortrait}) {
        flex-direction: column;
        margin: ${props => props.imgMargin ? `${props.imgMargin}` : `60px 0`};
    }
    ${props => props.rectangle ? `
        flex-direction: column; 
    `: ` 
        flex-direction: row-reverse
    `}
`;

export const Img= styled.img`
    width: ${props => props.sub && !props.rectangle ? `calc(100% - 220px)` : `100%`};
    height: 100%;
    object-fit: contain;
    object-position;

    ${props => props.sub && `
        box-shadow: -10px 10px 0px 0px ${colors.vibrantBlue};
    `}

    @media screen and (${mediaQ.tabletPortrait}) {
        width: ${props => props.sub && !props.rectangle ? `calc(70% - 30px)` : `100%`};
    }

    @media screen and (${mediaQ.mobilePortrait}) {
        width: 100%;
    }
`;

export const FigCaption = styled.figcaption`
    min-width: 189px;
    max-width: 189px;
    
    align-self: flex-end;
    text-align: justify;

    padding-top: 12px;
    border-top: 3px solid ${colors.vibrantBlue};
    margin-right: 30px;

    font-size: 16px;

    ${props => props.rectangle && `
        min-width: 100%;
        max-width: 100%;

        text-align: center;

        margin-right: 0;
        padding-top: 23px;
        border-top: 0;
    `}

    @media screen and (${mediaQ.tabletPortrait}) {
        width: ${props => props.rectangle ? `100%` : `30%`};
        min-width: inherit;
        max-width: inherit;
    }
    @media screen and (${mediaQ.mobilePortrait}) {
        text-align: center;
        padding-top: 23px;
    }

    @media screen and (${mediaQ.mobilePortrait}) {
        width: 100%;
        min-width: inherit;
        max-width: inherit;

        border-top: 0;
        margin-right: 0;

        font-size: 12px;
    }
`;
