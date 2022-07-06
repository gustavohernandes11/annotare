import * as Styled from './styles.js'
import { Heading } from '../Heading/index.jsx'
import { Button } from '../Button/index.jsx'
import { Plus } from '@styled-icons/fa-solid'

export const AsideMenuHeader = () => {
    return (
        <>
        <Styled.Header>
            <Heading as='h2'>Categories</Heading>
            <Button onClick={() => {}}>
                <Plus width={15} height={15} /> 
            </Button>
        </Styled.Header>
        {/* Componente de input de categoria */}
        </>
    )
}

