import styled, { css } from "styled-components";

export const Container = styled.div`
    background-color: #f3f1e7;
    padding: 2% 4% 0;
`

export const Data = styled.div`
    display: flex;

    ${props => props.out && css`
        margin: 35px 0 0;

        @media (max-width: 1020px) {
            flex-direction: column;
        }
    `}

    ${props => props.mid && css`
        @media (max-width: 820px) {
            flex-direction: column;
        }
    `}

    ${props => props.in && css`
        flex: 1;
        max-width: 500px;
        margin: 15px 25px;

        @media (max-width: 1020px) {
            margin: 35px 0;
        }
    `}
`

export const PerDolar = styled.div`
    min-width: 210px;
`

export const Img = styled.img`
    width: 112px;
    height: 158px;
`

export const Pnative = styled.p`
    ${props => props.p1 && css`
        font-size: 1.6em;
        font-weight: 600;

        @media (max-width: 820px) {
            font-size: 1.2em;
        }
    `}

    ${props => props.p2 && css`
        font-size: 1em;
        font-weight: 500;
        color: rgb(80, 80, 80);
        margin-top: 8px;
    `}

    ${props => props.p3 && css`
        font-size: 1em;
        font-weight: 500;
        color: rgb(80, 80, 80);
        margin: 12px;
        letter-spacing: .5px;

        @media (max-width: 820px) {
            font-size: .95em;
            font-weight: 400;
        }
    `}
`

export const H3 = styled.h3`
    font-weight: 600;
    letter-spacing: .5px;
    margin-left: 12px;

    @media (max-width: 820px) {
        font-size: 1.05em;
    }
`