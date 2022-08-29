import styled, { css } from "styled-components";
import { Container } from "./../Button/styles";

export const Button = styled(Container)`
    ${({ theme }) => css`
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 5px;
        bottom: 20px;
        right: 20px;
        background: ${theme.colors.secondary};
        display: none;
        -webkit-box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.51);
        box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.51);
        color: ${theme.name === "light" ? theme.colors.white : "inherit"};

        @media screen and (max-width: ${theme.screens.mobileL}) {
            bottom: 3rem;
            right: -3px;
            border-top-left-radius: 50%;
            border-bottom-left-radius: 50%;
            /* right: 50%;
            transform: translateX(50%); */

            width: 35px;
            height: 35px;
        }
    `}
`;
