import styled, { css } from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;

    ${props => props.center && css`
        justify-content: center;
    `}

    ${props => props.between && css`
        justify-content: space-between;
    `}

    ${props => props.width840 && css`
        @media (max-width: 840px) {
            display: none;
        }  
    `}

    ${props => props.column && css`
        flex-direction: column;
        align-items: start;
    `}
`

export const Button = styled.button`
    padding: 8px 18px;
    border-radius: 20px;
    font-size: .95em;
    font-weight: 600;
    border: 1px solid black;
    background-color: white;
    cursor: pointer;

    ${props => props.black && css`
        color: white;
        background-color: black;
    `}

    ${props => props.green && css`
        color: white;
        background-color: #008248;
        border: none;
        margin: 35px 0 15px;
    `}

    ${props => props.greenwhite && css`
        color: white;
        background-color: #1e3932;
        border: 1px solid white;
    `}

    ${props => props.m10 && css`
        margin: 0 10px;
    `}
`

// media queries
export const Hidden = styled.span`
    display: block;

    @media (max-width: 768px) {
        display: none;
    }

    ${props => props.w840 && css`
        @media (max-width: 840px) {
            display: none;
        }
    `}
`

export const Show = styled.span`
    display: none;

    @media (max-width: 768px) {
        display: block;
    }

    ${props => props.w840 && css`
        @media (max-width: 840px) {
            display: block;
        }
    `}
`