import { useState } from "react";
import * as Styled from "./styles.js";
import { ClickAway } from "../Popover/styles";
import P from "prop-types";
import { CardFooter } from "./CardFooter";
import { CardBody } from "./CardBody";
import { CardHeader } from "./CardHeader";
import { Expand } from "@styled-icons/fa-solid";
import { IconButton } from "./../IconButton/index";

export const Card = ({
    heading,
    children,
    color,
    category,
    createdAt,
    data,
}) => {
    const [isActive, setIsActive] = useState(false);
    const [isViewMode, setIsViewMode] = useState(false);

    return (
        <>
            {isViewMode && <ClickAway onClick={() => setIsViewMode(false)} />}
            <Styled.Container
                style={{
                    position: isViewMode ? "absolute" : "inherit",
                    zIndex: isViewMode ? "99" : "inherit",
                    top: isViewMode ? "15%" : "inherit",
                    WebkitLineClamp: isViewMode ? "none" : "inherit",
                    width: isViewMode ? "60%" : "inherit",
                    height: isViewMode ? "60%" : "inherit",
                    alignSelf: isViewMode ? "center" : "inherit",
                    justifySelf: isViewMode ? "center" : "inherit",
                    overflowY: isViewMode ? "auto" : "inherit",
                }}
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
                <CardFooter data={data} isActive={isActive}>
                    <IconButton onClick={() => setIsViewMode(!isViewMode)}>
                        <Expand width={15} height={15} />
                    </IconButton>
                </CardFooter>
            </Styled.Container>
        </>
    );
};

Card.propTypes = {
    children: P.node.isRequired,
    color: P.string,
    heading: P.string,
};
