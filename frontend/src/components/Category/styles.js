import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme, color = theme.colors.secondary, selected }) => css`
        border: 1px solid ${theme.colors.border};
        align-items: center;
        padding: ${theme.spacings.medium};
        color: ${theme.colors.primary};
        border-radius: 5px;
        margin-top: ${theme.spacings.xsmall};
        background-color: ${theme.colors.backgroundTertiary};
        transition: ease-in-out 0.08s;
        ${selected && `border-left: 6px solid ${color}`}

        :hover {
            cursor: pointer;
            ::before {
                transition: ease-in-out 0.08s;
                content: "•    ";
                justify-content: space-between;
            }

        }

    `}
    
`;