import * as Styled from './styles.js'
import { Heading } from '../Heading/index.jsx'
// import { LargeButton } from '../LargeButton/index.jsx'
import { AddCategoriesButton } from '../AddCategoriesButton/index.jsx'
import P from 'prop-types'

export const AsideMenuHeader = () => {
    return (
        <Styled.Header>
            <Heading as='h2'>Categorias</Heading>
            <AddCategoriesButton />
        </Styled.Header>
    )
}

AsideMenuHeader.propTypes = {
    children: P.node.isRequired
}
