import styled, { css } from "styled-components";

export const Container = styled.h1`
    ${({ theme }) => css`
        color: ${theme.colors.primary};
        margin: 0px;
    `}
`;
