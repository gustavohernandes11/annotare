import { useState } from 'react'
import * as Styled from './styles.js'
import P from 'prop-types'
import { CardHeader } from './CardHeader'
import { CardBody } from './CardBody'
import { CardFooter } from './CardFooter'

export const Card = ({ heading, children, color, category, createdAt }) => {
    const [isActive, setIsActive] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false)

    return (
        <>
            <Styled.Container
                // style={{
                //     // position: isFullScreen ? 'relative' : 'inherit',
                //     flexGrow: isFullScreen ? '3' : 'inherit',
                //     // top: isFullScreen ? '-50%' : 'inherit',
                //     // right: isFullScreen ? '-50%' : 'inherit',
                //     zIndex: isFullScreen ? '99' : 'inherit',
                //     //  width: isFullScreen ? '200%' : 'inherit',
                //     //  height: isFullScreen ? '200%' : 'inherit',
                //     overflowY: isFullScreen ? 'auto' : 'inherit',
                    
                // }}

                fallback={<p>...</p>}
                color={color}
                onMouseEnter={() => setIsActive(() => true)}
                onMouseLeave={() => setIsActive(() => false)}
                
            >
                <CardHeader isActive={isActive} />
                <CardBody
                onClick={() => setIsFullScreen(() => !isFullScreen)}
                >
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

