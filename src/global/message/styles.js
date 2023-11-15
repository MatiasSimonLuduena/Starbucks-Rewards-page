import styled, { css } from "styled-components";

export const Container = styled.div`
    position: fixed;
    width: 100%;
    height: auto;
    background-color: #1e3932;
    z-index: 10;
    color: #f1f8f6;
    font-weight: 400;
    letter-spacing: .5px;
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
    align-items: center;

    ${props => props.in && css`
        animation: in .6s forwards;
    `}

    ${props => props.out && css`
        animation: out .6s forwards;
    `}

    @keyframes in {
        0% {
            bottom: -150px;
        }
        100% {
            bottom: 0;
        }
    }

    @keyframes out {
        0% {
            bottom: 0;
        }
        100% {
            bottom: -150px;
        }
    }

    a {
        color: #f1f8f6;
        text-decoration: underline;
        margin-left: 5px;
    }

    button {
        background-color: #1e3932;
        border: 1px solid #fff;
        color: #fff;
        padding: 5px 10px 6px;
        margin: 0 5px;
        cursor: pointer;
        font-weight: 900;

        &:hover {
            color: #1e3932;
            border: 1px solid #1e3932;
            background-color: #fff;
        }
    }

    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: start;
        font-size: .9em;
        line-height: 25px;

        button {
            margin-top: 15px;
            font-size: .9em;
        }
    }
`