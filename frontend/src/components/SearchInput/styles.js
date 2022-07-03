import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;

        > input {
            border:none;
            height: 30px;
            margin-right: ${theme.spacings.small};
            border-bottom: 1px solid ${theme.colors.border};
            background-color:${theme.colors.backgroundPrimary} ;
            color: ${theme.colors.primary};

        }
        > svg {
            color: ${theme.colors.primary};

        }
    `}
    
`;