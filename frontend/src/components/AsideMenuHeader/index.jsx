import * as Styled from './styles.js'
import { Heading } from '../Heading/index.jsx'
import { AddCategoriesButton } from '../AddCategoriesButton/index.jsx'

export const AsideMenuHeader = () => {
    return (
        <Styled.Header>
            <Heading as='h2'>Categories</Heading>
            <AddCategoriesButton />
        </Styled.Header>
    )
}

