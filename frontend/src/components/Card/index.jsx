import { useState } from 'react'
import * as Styled from './styles.js'
import P from 'prop-types'
import { CardHeader } from './CardHeader'
import { CardBody } from './CardBody'
import { CardFooter } from './CardFooter'

export const Card = ({ heading, children, color, category, createdAt }) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <>
            <Styled.Container
                color={color}
                onMouseEnter={() => setIsActive(() => true)}
                onMouseLeave={() => setIsActive(() => false)}
            >
                <CardHeader isActive={isActive} />
                <CardBody>
                    <h3>{heading}</h3>
                    <p>{children}</p>
                </CardBody>
                <CardFooter>
                    <span>{category}</span>
                    <span>{createdAt}</span>
                </CardFooter>
            </Styled.Container>
        </>
    )
}

Card.propTypes = {
    children: P.node.isRequired,
    color: P.string,
    heading: P.string,
}

