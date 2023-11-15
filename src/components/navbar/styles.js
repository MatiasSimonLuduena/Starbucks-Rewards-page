import styled, { css } from "styled-components";

// icon
export const Icons = styled.svg`
    width: 51px;
    height: 51px;
    margin-right: 25px;
    cursor: pointer;
`

// navbar
export const Nav = styled.nav`
    width: 100%;
    height: auto;
    padding: 24px 4.5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    z-index: 7;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const A = styled.a`
    padding: 14px;
    font-size: .92em;
    font-weight: 700;
    letter-spacing: .7px;
    cursor: pointer;
    position: relative;

    ${props => props.slide && css`
        font-size: 1.2em;
        color: rgb(62, 62, 62);
        font-weight: 500;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}

    ${props => props.hover && css`
        &:hover {
            color: #008248;
        }
    `}

    ${props => props.barra && css`
        &::after {
            content: "";
            width: 80%;
            height: 6px;
            background-color: #008248;
            position: absolute;
            bottom: -25px;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
        }
    `}
`

export const Bars = styled.div`
    font-size: 1.2em;
    color: rgb(50, 50, 50);
    cursor: pointer;
    padding: 6px 12px;
    border-radius: 45%;
    transition: background-color .2s ease-in;

    &:hover {
        background-color: rgb(235, 235, 235);
    } 
`