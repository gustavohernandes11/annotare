import styled, { css } from "styled-components";

export const Container = styled.main`
    ${({ theme, color = theme.colors.secondary }) => css`
        padding: ${theme.spacings.small} ${theme.spacings.medium};

        > p,
        h3 {
            display: -webkit-box;
            text-align: justify;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: pre-line;
        }

        > h3 {
            -webkit-line-clamp: 2;
        }
    `}
`;
