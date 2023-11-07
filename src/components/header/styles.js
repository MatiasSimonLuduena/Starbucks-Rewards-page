import styled from "styled-components";

// Fixed
export const FixedContainer = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    background-color: #1e3932;
    color: #fff;
    font-weight: 700;
    padding: 15px 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
`

// Header
export const HeaderContainer = styled.div`
    background-color: #d4e9e2;
    padding: 15% 5%;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1% 15% 80% 15%;
        text-align: center;
    }
`

export const H2 = styled.h2`
    font-size: 2.3em;
    font-weight: 600;
    margin: 25px 0;

    @media (max-width: 768px) {
        font-size: 1.8em;
    }
`

export const Span = styled.span`
    color: rgb(75, 75, 75);
    font-weight: 500;
    font-size: 1.2em;
    display: block;

    @media (max-width: 768px) {
        font-size: 1em;
    }
`

export const A = styled.a`
    text-decoration: underline;
    cursor: pointer;

    &:hover {
        text-decoration: none;
    }
`