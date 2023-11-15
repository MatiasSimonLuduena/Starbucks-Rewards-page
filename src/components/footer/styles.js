import styled, { css } from "styled-components";

export const Top = styled.div`
    display: flex;
    gap: 45px;
    margin: 3%;

    h2 {
        font-size: 1.15em;
        font-weight: 600;
        margin-bottom: 15px;
        color: rgb(45, 45, 45);
    }

    svg {
        display: none;
    }

    @media (max-width: 1020px) {
        flex-direction: column;
        margin-top: 80px;

        h2 {
            font-size: 1.2em;
            margin-bottom: 0;
            cursor: pointer;
        }

        svg {
            display: block;
            width: 32px;
            height: 32px;
        }
    }
`

export const TopDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 35px 0;
    max-width: 200px;
    
    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        pointer-events: none;
    }

    @media (max-width: 1020px) {
        margin: 0;
        max-width: none;

        &:last-child {
            margin-bottom: 15px;
        }

        div {
            pointer-events: all;
        }
    }
`

export const TopA = styled.a`
    color: gray;
    margin: 10px 0;
    letter-spacing: .4px;
    cursor: pointer;

    &:hover {
        color: black;
    }

    @media (max-width: 1020px) {
        display: none;

        ${props => props.hidden && css`
            display: block;
        `}
    }
`

export const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3%;

    svg {
        width: 32px;
        height: 32px;
        margin: 5px;
        cursor: pointer;
    }

    p {
        color: gray;
        font-size: .9em;
        margin: 20px 0 50px;
    }
`

export const LastDivBottom = styled.div`
    display: flex;
    gap: 15px;

    a {
        letter-spacing: .3px;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }

        span {
            margin-left: 10px;
            color: gray;
        }
    }

    @media (max-width: 1020px) {
        flex-direction: column;
        margin-top: 15px;

        a {
            margin: 5px 0;
            span {
                display: none;
            }
        }
    }
`