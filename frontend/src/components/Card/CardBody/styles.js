import styled, { css } from "styled-components";

export const Container = styled.main`
    ${({ theme, color = theme.colors.secondary, isViewMode = false }) => css`
        padding: ${theme.spacings.small} ${theme.spacings.medium};
        overflow: ${isViewMode === true ? "auto" : "hidden"};

        > p,
        h3 {
            display: -webkit-box;
            text-align: justify;
            -webkit-box-orient: vertical;
            max-height: max-content;
            max-width: max-content;
            -webkit-line-clamp: ${isViewMode === true ? "unset" : 7};
            margin-bottom: ${isViewMode === true
                ? theme.spacings.small
                : "inherit"};

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: pre-line;
        }

        > h3 {
            -webkit-line-clamp: ${isViewMode === true ? "unset" : 7};
        }
    `}
`;
