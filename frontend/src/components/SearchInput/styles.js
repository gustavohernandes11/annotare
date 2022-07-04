import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        background-color:${theme.colors.backgroundPrimary};
        border: 1px solid ${theme.colors.border};
        border-radius: 5px;

        :focus {
            outline: auto;
        }

        > input {
            border:none;
            padding: ${theme.spacings.xsmall};
            width: 140px;
            background-color: transparent;
            border:none;
            margin-right: ${theme.spacings.small};
            color: ${theme.colors.primary};

        }
        > input:focus {
            outline: none;
        }
        svg {
            color: ${theme.colors.grey};
            margin-right: ${theme.spacings.small};

        } 
        > button {
            margin: ${theme.spacings.xsmall};
        }
    `}
    
`;