import { useState } from "react";
import * as Styled from "./styles.js";
import { Input } from "../Input/index.jsx";
import { IconButton } from "../IconButton";
import { Plus, Trash } from "@styled-icons/fa-solid";
import { useGlobalContext } from "../../hooks/useGlobalContext.jsx";
import { useDataContext } from "../../hooks/useDataContext.jsx";
import { toast } from "react-toastify";

export const AddCategoryForm = () => {
    const [, globalActions] = useGlobalContext();
    const [dataState, dataActions] = useDataContext();
    const [inputName, setInputName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputName === "") return;
        const repeatedNames = dataState.categories.filter(
            (e) => e.name === inputName.trim()
        );
        if (repeatedNames.length > 0) {
            toast.warn("Essa categoria já existe.");
        } else {
            dataActions.addNewCategory({
                name: inputName.trim(),
                id: Date.now(),
                color: "grey",
            });
            globalActions.setAddCategoryMode(false);
            toast.success("Categoria adicionada!");
        }
    };

    return (
        <Styled.Container>
            <Input
                autoFocus
                type="text"
                name="input-category-name"
                maxLength="20"
                minLength="3"
                onChange={(e) => setInputName(e.target.value)}
                id="input-category-name"
                placeholder="Categoria..."
                marginBottom="5px"
                padding="5px"
            />
            <IconButton
                type="button"
                onClick={() => globalActions.setAddCategoryMode(false)}
                size="35px"
            >
                <Trash width={15} height={15} />
            </IconButton>
            <IconButton
                type="submit"
                onClick={(e) => handleSubmit(e)}
                size="35px"
            >
                <Plus width={15} height={15} />
            </IconButton>
        </Styled.Container>
    );
};
