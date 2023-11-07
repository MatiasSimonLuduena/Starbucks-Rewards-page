import styled, { css } from "styled-components";

export const Container = styled.div`
    ${props => props.out && css`
        background-color: #008248;
        padding: 25px;

        @media (max-width: 780px) {
            padding: 0;
        }
    `}

    ${props => props.in && css`
        width: 98.5%;
        background-color: #d4e9e2;
        padding: 7% 20%;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (max-width: 530px) {
            padding: 7% 10%;
        }
    `}
`
export const H2 = styled.h2`
    font-weight: 600;
    font-size: 1.6em;
    text-align: center;
    margin-bottom: 10px;
`

export const Img = styled.img`
    width: 195px;
    height: auto;
    margin: 20px 0;
`