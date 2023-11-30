import styled, { css } from "styled-components";

export const Container = styled.header`
    ${({ theme }) => css`
        display: flex;
        justify-content: space-between;
        font-size: ${theme.sizes.small};
        color: ${theme.colors.grey};
        padding: ${theme.spacings.small} ${theme.spacings.medium};
    `}
`;
