/* eslint-disable no-unused-vars */
import { useState } from "react";
import * as Styled from "./styles.js";
import P from "prop-types";
import { IconButton } from "../../IconButton/index.jsx";
import { Expand, TrashAlt, PencilAlt } from "@styled-icons/fa-solid";
import { useDataContext } from "../../../hooks/useDataContext.jsx";
import { useGlobalContext } from "../../../hooks/useGlobalContext.jsx";
import { toast } from "react-toastify";
import { Popover } from "./../../Popover/index";

const sizeProps = {
    widht: 15,
    height: 15,
};

export const CardFooter = ({ children, isActive, data, isViewMode }) => {
    const [dataState, dataActions] = useDataContext();
    const [globalState, globalActions] = useGlobalContext();
    const [isRemoveCardActive, setisRemoveCardActive] = useState(false);

    const handleEdit = () => {
        globalActions.setSelectedAnnotation(data);
        globalActions.setEditMode(true);
    };

    const handleRemove = async () => {
        try {
            await dataActions.removeAnnotation(data);
            toast.success("Anotação removida.");
        } catch {
            toast.error("Houve um erro inesperado.");
        }
    };

    return (
        <>
            {isRemoveCardActive && (
                <Popover
                    mensage={`Deletar anotação?`}
                    heading={null}
                    acceptFunction={handleRemove}
                    cancelFunction={() => setisRemoveCardActive(false)}
                />
            )}
            <Styled.Container
                style={{
                    opacity:
                        isActive || isViewMode || window.screen.width < 768
                            ? "1"
                            : "0",
                }}
            >
                <span>{children}</span>
                <span>
                    <IconButton onClick={() => setisRemoveCardActive(true)}>
                        <TrashAlt {...sizeProps} />
                    </IconButton>
                    <IconButton onClick={handleEdit}>
                        <PencilAlt {...sizeProps} />
                    </IconButton>
                </span>
            </Styled.Container>
        </>
    );
};

CardFooter.propTypes = {
    children: P.node,
};
