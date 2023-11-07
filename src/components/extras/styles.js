import styled from "styled-components";

export const Img = styled.img`
    width: 112px;
    height: 112px;
    margin: 30px 0 25px;

    @media (max-width: 768px) {
        margin: 0 20px 0 0;
    }
`

export const Button = styled.button`
    background-color: transparent;
    border: none;
    color: #008248;
    text-decoration: underline;
    font-size: .9em;
    cursor: pointer;

    &:hover {
        text-decoration: none;
    }
`