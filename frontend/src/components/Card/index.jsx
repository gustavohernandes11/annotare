import { useState } from "react";
import * as Styled from "./styles.js";
import P from "prop-types";
import { CardFooter } from "./CardFooter";
import { CardBody } from "./CardBody";
import { CardHeader } from "./CardHeader";

export const Card = ({
    heading,
    children,
    color,
    category,
    createdAt,
    data,
}) => {
    const [isActive, setIsActive] = useState(false);
    // const [isFullScreen, setIsFullScreen] = useState(false)

    return (
        <>
            <Styled.Container
                // style={{
                //     position: isFullScreen ? 'absolute' : 'inherit',
                //     zIndex: isFullScreen ? '99' : 'inherit',
                //     // top: isFullScreen ? '30%' : 'inherit',
                //     WebkitLineClamp: isFullScreen ? 'none' : 'inherit',
                //     width: isFullScreen ? '50%' : 'inherit',
                //     height: isFullScreen ? '30%' : 'inherit',
                //     alignSelf: isFullScreen ? 'center' : 'inherit',
                //     justifySelf: isFullScreen ? 'center' : 'inherit',
                //     overflowY: isFullScreen ? 'auto' : 'inherit',

                // }}
                fallback={<p>...</p>}
                color={color}
                onMouseEnter={() => setIsActive(() => true)}
                onMouseLeave={() => setIsActive(() => false)}
            >
                <CardHeader>
                    <span>{category}</span>
                    <span>{createdAt}</span>
                </CardHeader>
                <CardBody>
                    {heading && <h3>{heading}</h3>}
                    <p>{children}</p>
                </CardBody>
                <CardFooter data={data} isActive={isActive}></CardFooter>
            </Styled.Container>
        </>
    );
};

Card.propTypes = {
    children: P.node.isRequired,
    color: P.string,
    heading: P.string,
};
