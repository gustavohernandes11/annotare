import styled, { css } from "styled-components";

export const Header = styled.header`
    ${({ theme }) => css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: ${theme.spacings.medium};
        gap: ${theme.spacings.small};
    `}
`;
