import styled, { css } from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0 0;
    background-color: #f1f8f6;
`

export const ContainerCard = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
`

export const Card = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    position: absolute;
    top: 0;
    padding: 30px 0;
    background-color: #d4e9e2;

    ${props => props.active && css`
        opacity: 1;
    `}

    @media (max-width: 768px) {
        height: 500px;
    }
`

export const Width50 = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        width: 90%;
        flex-direction: column;
    }
`

export const Card_div = styled.div`
    flex: 1;
    margin: 0 50px;
    width: 100%;

    @media (max-width: 768px) {
        margin: 5px;
    }
`

// components
export const H2 = styled.h2`
    font-size: 1.8em;
    font-weight: 600;
    margin-bottom: 35px;

    @media (max-width: 768px) {
        font-size: 1.5em;
    }
`

export const H3 = styled.h3`
    font-size: 1.55em;
    font-weight: 600;
    margin-bottom: 15px;
    width: 350px;

    @media (max-width: 768px) {
        width: 100%;
        margin: 0;
        font-size: 1.25em;
        text-align: center;
    }
`

export const P = styled.h2`
    font-size: 1em;
    font-weight: 400;
    letter-spacing: .2px;
    width: 350px;

    @media (max-width: 768px) {
        width: 100%;
        margin: 25px 0 0;
        text-align: center;
    }
`

export const Button = styled.h2`
    font-size: 1.6em;
    font-weight: 500;
    padding: 25px;
    cursor: pointer;
    position: relative;
    
    &::after {
        content: "";
        width: 0;
        height: 4px;
        background-color: #008248;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: width 0.3s ease;
    }

    ${props => props.after && css`
        &::after {
            width: 100%;
        }
    `}

    // Media Queries
    @media (max-width: 768px) {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        font-size: 1.25em;
        padding: 15px;
    }
`

export const Star = styled.span`
    font-size: .7em;
    color: #CDA528;
`

export const Img = styled.img`
    width: 380px;
    height: auto;
    flex: 1;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const Div = styled.img`
    height: 300px;

    @media (max-width: 768px) {
        height: 500px;
    }
`