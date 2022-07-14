import { useState } from "react";
import * as Styled from "./styles.js";
import { ClickAway } from "../Popover/styles";
import P from "prop-types";
import { CardFooter } from "./CardFooter";
import { CardBody } from "./CardBody";
import { CardHeader } from "./CardHeader";
import { Expand } from "@styled-icons/fa-solid";
import { IconButton } from "./../IconButton/index";
import { useGlobalContext } from "../../hooks/useGlobalContext";

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
    const [globalState] = useGlobalContext();

    return (
        <>
            {isViewMode && <ClickAway onClick={() => setIsViewMode(false)} />}
            <Styled.Container
                activeLayout={globalState.activeLayout}
                isViewMode={isViewMode}
                color={color}
                onMouseEnter={() => setIsActive(() => true)}
                onMouseLeave={() => setIsActive(() => false)}
            >
                <CardHeader>
                    <span>{category}</span>
                    <span>{createdAt}</span>
                </CardHeader>
                <CardBody isViewMode={isViewMode}>
                    {heading && <h3>{heading}</h3>}
                    <p>{children}</p>
                </CardBody>
                <CardFooter
                    data={data}
                    isActive={isActive}
                    isViewMode={isViewMode}
                >
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
    heading: P.oneOfType([P.string, P.number]),
    category: P.oneOfType([P.string, P.number]),
    createdAt: P.string,
    data: P.object.isRequired,
};
