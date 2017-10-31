import styled from 'styled-components';
import { colors } from '../../resources/styles/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    border-top: 10px solid ${colors.vibrantBlue};
`;

export const Row = styled.div`

    @media screen and (max-width: 414px) {
        text-align: center;
    }
`;

export const Col = styled.div`
    text-align: left;
    margin-bottom: 50px;

    display: flex;
    flex-flow: wrap;

    @media screen and (max-width: 414px) {
        width: 100%;
        flex-flow: column;
        text-align: center;
    }
`;

export const Colaborador = styled.div`
    width: 33.33%;
    margin-bottom: 25px;

    @media screen and (max-width: 414px) {
        width: auto;
    }
`;

export const Button = styled.div`
    font-size: 24px;
    display: flex;
    justify-content: center;
    background-color: transparent;
    border: none;
    margin-left: auto;
    margin-right: auto;
    padding: 28px;
    cursor: pointer;

    @media screen and (max-width: 414px) {
        font-size: 18px;
    }
`;

export const Funcao = styled.p`
    font-size: 16px;
    color: ${colors.vibrantBlue};
    margin: 0;
    font-weight: bold;
`;

export const Nome = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #000000;
    margin: 5px 0;
    font-weight: normal;
`;

export const Arrow = styled.div`
    width: 15px;
    height: 15px;

    margin-top: ${props => props.open ? '5px' : '-5px'};
    margin-left: 15px;

    border-right: 4px solid ${colors.vibrantBlue};
    border-bottom: 4px solid ${colors.vibrantBlue}; 
    
    transform: ${props => props.open ?
         'rotate(225deg)' 
         : 
         'rotate(45deg)'};
`;