import styled, { css } from "styled-components";

export const Container = styled.main`
    ${({ theme, color = theme.colors.secondary, isViewMode = false }) => css`
        padding: ${theme.spacings.small} ${theme.spacings.medium};
        overflow: ${isViewMode === true ? "auto" : "hidden"};
        text-overflow: ellipsis;

        > p,
        h3 {
            display: -webkit-box;
            font-size: ${theme.sizes.small};
            max-height: max-content;
            max-width: max-content;
            margin-bottom: ${
                isViewMode === true ? theme.spacings.small : "inherit"
            };

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: pre-line;
        }

        > h3 {
            font-size: ${theme.sizes.medium};
            -webkit-line-clamp: ${isViewMode === true ? "unset" : 7};
            margin-bottom: ${theme.spacings.small};
    `}
`;
