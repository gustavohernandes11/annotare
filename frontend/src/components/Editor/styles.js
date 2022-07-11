import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        padding: ${theme.spacings.medium};
        padding-inline: ${theme.spacings.xlarge};
        overflow-y: auto;
        height: 100vh;
    `}
`;
