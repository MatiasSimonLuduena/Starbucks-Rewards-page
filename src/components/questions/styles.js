import styled, { css } from "styled-components";

export const Container = styled.div`
    ${props => props.top && css`
        margin: 75px 20%;
        display: flex;
        flex-direction: column;
        align-items: start;
    `}

    ${props => props.bottom && css`
        background-color: rgb(240, 240, 240);
        padding: 50px;

        @media (max-width: 780px) {
            padding: 20px;
        }
    `}
`

export const H2 = styled.h2`
    font-size: 1.7em;
    font-weight: 600;
    margin-bottom: 15px;
`

export const H22 = styled.h2`
    font-size: 1em;
    font-weight: 600;
    margin-bottom: 10px;
    color: rgb(100, 100, 100);

    @media (max-width: 780px) {
        font-size: .9em;
    }
`

export const P = styled.p`
    color: rgb(80, 80, 80);
    font-weight: 500;
    letter-spacing: .5px;
    text-align: start;
    line-height: 1.5em;
    width: 100%;
    max-width: 720px;
    margin: 15px 0;

    a {
        color: #008248;
        text-decoration: underline;
        cursor: pointer;
    }
`

export const P2 = styled.p`
    font-weight: 400;
    letter-spacing: .5px;
    text-align: start;
    line-height: 1.5em;
    width: 100%;
    margin: 15px 0;
    font-size: .95em;

    a {
        color: #008248;
        text-decoration: underline;
        cursor: pointer;
    }

    @media (max-width: 780px) {
        font-size: .9em;
    }
`

export const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    margin-top: 30px;

    div {
        flex: 1;
        min-width: 45%;
    }

    @media (max-width: 780px) {
        div {
            min-width: 95%;
        }
    }
`