import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: 50px 250px 1fr;
        background-color: ${theme.colors.backgroundPrimary};
        color: ${theme.colors.white};
        max-height: 100vh;
        max-width: 100vw;
        overflow: hidden;
        transition: color ease-in-out 0.5s;

        path {
            fill: ${theme.name === "rainbow"
                ? `url('#my-cool-gradient')`
                : "inherit"};
        }

        @media screen and (max-width: ${theme.screens.tablet}) {
            grid-template-columns: 40px 1fr;
            grid-template-areas: "asidebar content";

            #asidemenu {
                display: block;
                position: absolute;
                top: 0;
                left: 40px;
            }
        }
    `}
`;
