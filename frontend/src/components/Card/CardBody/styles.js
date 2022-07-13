import styled, { css } from "styled-components";

export const Container = styled.main`
    ${({ theme, color = theme.colors.secondary }) => css`
        padding: ${theme.spacings.small} ${theme.spacings.medium};
        overflow: hidden;
    
        > p,
        h3 {
            display: -webkit-box;
            text-align: justify;
            -webkit-box-orient: vertical;
            max-height: max-content;
            max-width: max-content;
            -webkit-line-clamp: 7;



            overflow: hidden;
            text-overflow: ellipsis;
            white-space: pre-line;
        }

        > h3 {
            -webkit-line-clamp: 2;
        }
    `}
`;
