import * as Styled from "./styles.js";
import { useState } from "react";
import { Popover } from "../Popover";
import { Heading } from "../Heading/index.jsx";
import { LargeButton } from "../LargeButton/index.jsx";
import { SearchInput } from "../SearchInput/index.jsx";
import { TrashAlt, Plus } from "@styled-icons/fa-solid";
import { IconButton } from "../IconButton";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { useDataContext } from "../../hooks/useDataContext";
import { toast } from "react-toastify";

import P from "prop-types";
import { FloatButton } from "./../FloatButton/index";

export const ContentHeader = () => {
    const [globalState, globalActions] = useGlobalContext();
    // eslint-disable-next-line no-unused-vars
    const [dataState, dataActions] = useDataContext();
    const [isRemoveCategoryActive, setisRemoveCategoryActive] = useState();

    const handleAddNote = () => {
        globalActions.setEditMode(true);
        globalActions.setSelectedAnnotation(null);
    };
    const handleAccept = async () => {
        try {
            await dataActions.removeCategory(globalState.selectedCategory);
            globalActions.setSelectedCategory(null);
            setisRemoveCategoryActive(false);
            toast.success("Categoria deletada.");
        } catch (e) {
            toast.error("Houve um erro inesperado!");
        }
    };

    return (
        <Styled.Header>
            <FloatButton
                onClick={handleAddNote}
                id="float-add-annotation-button"
            >
                <Plus width={20} height={20} />
            </FloatButton>
            {isRemoveCategoryActive && (
                <Popover
                    mensage={`Você tem certeza que deseja excluir a
                     categoria "${globalState.selectedCategory}" e todas suas anotações relacionadas?`}
                    acceptFunction={handleAccept}
                    cancelFunction={() => setisRemoveCategoryActive(false)}
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
                <span>
                    {globalState.selectedCategory !== null && (
                        <IconButton
                            onClick={() => setisRemoveCategoryActive(true)}
                            className="delete-category-icon"
                        >
                            <TrashAlt width={15} height={15} />
                        </IconButton>
                    )}
                </span>
                <SearchInput
                    id="search-input"
                    onChange={(e) =>
                        globalActions.setSearchInputValue(e.target.value)
                    }
                />

                <LargeButton
                    id="add-annotations-button"
                    primary="true"
                    onClick={handleAddNote}
                >
                    Adicionar
                </LargeButton>
            </span>
        </Styled.Header>
    );
};

ContentHeader.propTypes = {
    children: P.node,
};
