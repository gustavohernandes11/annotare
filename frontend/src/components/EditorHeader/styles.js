import styled, { css } from "styled-components";

export const Header = styled.header`
    ${({ theme }) => css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: ${theme.colors.primary};

        > span.buttons-area {
            display: flex;
            flex-direction: row;
        }
        @media screen and (max-width: ${theme.screens.laptop}) {
            h1,
            h2 {
                font-size: 1.4rem;
            }
            
        }
        @media screen and (max-width: ${theme.screens.mobileL}) {
            justify-content: space-between;
            gap: ${theme.spacings.small};
            align-items: center;
        }
    `}
`;
