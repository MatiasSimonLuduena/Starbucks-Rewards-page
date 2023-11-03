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