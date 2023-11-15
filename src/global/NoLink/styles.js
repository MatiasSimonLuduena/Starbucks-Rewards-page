import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 250px;
    height: auto;
    background-color: #008248;
    color: #fff;
    position: fixed;
    bottom: 25px;
    z-index: 10;
    padding: 15px 30px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: .9em;
    left: -250px;

    ${props => props.in && css`
        animation: inLink .7s forwards;
    `}

    ${props => props.out && css`
        animation: outLink .7s forwards;
    `}

    @keyframes inLink {
        from {
            left: -250px;
        }
        to {
            left: 0;
        }
    }

    @keyframes outLink {
        from {
            left: 0;
        }
        to {
            left: -250px;
        }
    }
`