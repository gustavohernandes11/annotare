import * as Styled from "./styles.js";
import { Heading } from "../Heading/index.jsx";
import { useGlobalContext } from "../../hooks/useGlobalContext.jsx";
import { ArrowLeft } from "@styled-icons/fa-solid";
import { IconButton } from "../IconButton/index.jsx";

export const EditorHeader = () => {
    const [state, actions] = useGlobalContext();

    const handleCancel = () => {
        actions.setEditMode(false);
        actions.setSelectedAnnotation(null);
    };

    return (
        <Styled.Header>
            <span>
                <Heading>Criação e edição</Heading>
                <p>
                    {state.selectedAnnotation
                        ? `Editando anotação de ${state.selectedAnnotation.category}`
                        : `Adicionar anotação`}
                </p>
            </span>
            <IconButton marginBottom="0" onClick={handleCancel}>
                <ArrowLeft width={15} height={15} />
            </IconButton>
        </Styled.Header>
    );
};
