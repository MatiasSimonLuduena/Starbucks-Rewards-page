import styled, { css } from "styled-components";

export const H2 = styled.h2`
    font-size: 1.7em;
    font-weight: 600;
    text-align: center;
`

export const H3 = styled.h3`
    font-size: 1.2em;
    font-weight: 600;
    text-align: center;
`

export const P = styled.p`
    color: rgb(80, 80, 80);
    font-weight: 500;
    letter-spacing: .5px;
    text-align: center;
    line-height: 1.5em;
    width: 100%;
    max-width: 720px;
    margin: 15px auto;

    a {
        color: #008248;
        text-decoration: underline;
        cursor: pointer;
    }

    ${props => props.start768 && css`
        @media (max-width: 768px) {
            text-align: start;
            font-size: .95em;
        }
    `}
`

export const Img = styled.img`
    width: 48px;
    height: 48px;
    margin: 20px 0 25px;

    @media (max-width: 768px) {
        margin: 0 20px 0 0;
    }
`