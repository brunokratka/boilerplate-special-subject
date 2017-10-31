import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    padding: 20px 0;

    color: #FFF;
    background-color: #164194;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 18px;
    font-style: italic;

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

export const Logo = styled.img`
    width: 220px;
    height: 50px;
    margin-left: 8px;

    @media screen and (max-width: 768px) {
        width: 150px;
    }
`;