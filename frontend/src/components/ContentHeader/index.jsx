import * as Styled from "./styles.js";
import { useState } from "react";
import { Popover } from "../Popover";
import { Heading } from "../Heading/index.jsx";
import { LargeButton } from "../LargeButton/index.jsx";
import { SearchInput } from "../SearchInput/index.jsx";
import { TrashAlt } from "@styled-icons/fa-solid";
import { IconButton } from "../IconButton";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { useDataContext } from "../../hooks/useDataContext";
import { toast } from "react-toastify";

import P from "prop-types";

export const ContentHeader = () => {
    const [globalState, globalActions] = useGlobalContext();
    // eslint-disable-next-line no-unused-vars
    const [dataState, dataActions] = useDataContext();
    const [isPopoverActive, setIsPopoverActive] = useState();

    const handleClick = () => {
        globalActions.setEditMode(true);
        globalActions.setSelectedAnnotation(null);
    };
    const handleAccept = async () => {
        try {
            await dataActions.removeCategory(globalState.selectedCategory);
            globalActions.setSelectedCategory(null);
            setIsPopoverActive(false);
            toast.success("Categoria deletada.");
        } catch (e) {
            toast.error("Houve um erro inesperado!");
        }
    };

    return (
        <Styled.Header>
            {isPopoverActive && (
                <Popover
                    mensage={`Você tem certeza que deseja excluir a
                     categoria "${globalState.selectedCategory}" e todas suas anotações relacionadas?`}
                    acceptFunction={handleAccept}
                    cancelFunction={() => setIsPopoverActive(false)}
                />
            )}
            <span>
                <Heading>{globalState.selectedCategory || "Todas"}</Heading>
                <p>
                    {globalState.searchInputValue
                        ? `Buscando por "${globalState.searchInputValue}"`
                        : "Suas anotações"}
                </p>
            </span>
            <span className="search-and-button-span">
                <SearchInput
                    id="search-input"
                    onChange={(e) =>
                        globalActions.setSearchInputValue(e.target.value)
                    }
                />
                <LargeButton primary="true" onClick={handleClick}>
                    Adicionar
                </LargeButton>
                {globalState.selectedCategory !== null && (
                    <IconButton
                        onClick={() => setIsPopoverActive(true)}
                        className="delete-category-icon"
                    >
                        <TrashAlt width={20} height={20} />
                    </IconButton>
                )}
            </span>
        </Styled.Header>
    );
};

ContentHeader.propTypes = {
    children: P.node,
};
