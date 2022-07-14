import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        display: inline-flex;
        flex-direction: column;
        width: 100%;
        padding-top: ${theme.spacings.medium};
        padding-inline: ${theme.spacings.xlarge};
        background: ${theme.name === "light"
            ? "#e3e3e3"
            : theme.backgroundPrimary};

        overflow-y: auto;
        height: 100vh;
    `}
`;
