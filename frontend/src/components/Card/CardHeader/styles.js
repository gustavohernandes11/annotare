import styled, { css } from 'styled-components'

export const Container = styled.header`
    ${({ theme }) => css`
    min-height: ${theme.spacings.xlarge};
    padding:  ${theme.spacings.small} ${theme.spacings.medium};
    border-bottom: 1px solid ${theme.colors.border};

    `}
    
`;