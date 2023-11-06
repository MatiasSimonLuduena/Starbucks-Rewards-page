import styled, { css } from "styled-components";

export const Flex = styled.div`
    display: flex;

    ${props => props.align_center && css`
        align-items: center;
    `}

    ${props => props.align_start && css`
        align-items: start;
    `}

    ${props => props.justify_center && css`
        justify-content: center;
    `}

    ${props => props.between && css`
        width: 100%;
        justify-content: space-between;
    `}

    ${props => props.column && css`
        flex-direction: column;
    `}

    ${props => props.container && css`
        margin: 8%;

        @media (max-width: 768px) {
            margin: 8% 2%;
        }
    `}

    ${props => props.m1 && css`
        margin: 15px;
    `}

    // Media Queries
    ${props => props.column768 && css`
        @media (max-width: 768px) {
            flex-direction: column;
        }
    `}

    ${props => props.row768 && css`
        @media (max-width: 768px) {
            flex-direction: row;
        }
    `}

    ${props => props.between768 && css`
        @media (max-width: 768px) {
            width: 100%;
            justify-content: space-between;
        }
    `}

    ${props => props.justify_start768 && css`
        @media (max-width: 768px) {
            justify-content: start;
        }
    `}

    ${props => props.align_start768 && css`
        @media (max-width: 768px) {
            align-items: start;
        }
    `}

    ${props => props.width840 && css`
        @media (max-width: 840px) {
            display: none;
        }  
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
    margin: 0 10px;

    ${props => props.black && css`
        color: white;
        background-color: black;
    `}

    ${props => props.green && css`
        color: white;
        background-color: #008248;
        border: none;
    `}

    ${props => props.greenwhite && css`
        color: white;
        background-color: #1e3932;
        border: 1px solid white;
    `}

    ${props => props.m10 && css`
        margin: 0 10px;
    `}

    ${props => props.m30 && css`
        margin: 35px 0 15px;
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