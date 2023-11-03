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
    position: fixed;
    z-index: 3;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const A = styled.a`
    padding: 14px;
    font-size: .92em;
    font-weight: 700;
    letter-spacing: .7px;
    cursor: pointer;

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
`

export const Button = styled.button`
    padding: 8px 18px;
    margin: 0 10px;
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
`

export const Bars = styled.div`
    display: none;
    font-size: 1.2em;
    color: rgb(50, 50, 50);
    cursor: pointer;
    padding: 6px 12px;
    border-radius: 45%;
    transition: background-color .2s ease-in;

    &:hover {
        background-color: rgb(235, 235, 235);
    }

    @media (max-width: 840px) {
        display: block;
    }  
`