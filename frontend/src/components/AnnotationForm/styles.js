import styled, { css } from "styled-components";

export const Form = styled.form`
    ${({ theme }) => css`
        padding: ${theme.spacings.xlarge} 0;
        max-width: 600px;
        margin: auto;

        label {
            display: inline-block;
            color: ${theme.colors.grey};
            padding: ${theme.spacings.small};
        }

        > span {
            margin-bottom: ${theme.spacings.small};
            display: flex;
            flex-wrap: nowrap;
            gap: ${theme.spacings.xsmall};
            row-gap: ${theme.spacings.large};

            > select {
                min-width: 100%;
                color: ${theme.colors.primary};
                border: 1px solid ${theme.colors.border};
                border-radius: ${theme.spacings.xsmall};
                background-color: ${theme.colors.backgroundPrimary};
                resize: none;
                font-family: inherit;
                font-size: medium;
                padding: ${theme.spacings.small};
            }
        }
        
        
    `}
`;
