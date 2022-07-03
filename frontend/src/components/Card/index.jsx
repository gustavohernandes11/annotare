import * as Styled from './styles.js'
import P from 'prop-types'
import { CardHeader } from './CardHeader'
import { CardBody } from './CardBody'
import { CardFooter } from './CardFooter'

export const Card = ({ heading, children, color }) => {
    return (
        <>
            <Styled.Container color={color}>
                <CardHeader />
                <CardBody>
                    <h3>{heading}</h3>
                    <p>{children}</p>
                </CardBody>
                <CardFooter>12/03/1976</CardFooter>
            </Styled.Container>
        </>
    )
}

Card.propTypes = {
    children: P.node.isRequired,
    color: P.string,
    heading: P.string,
}

