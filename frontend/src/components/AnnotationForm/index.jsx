// eslint-disable-next-line no-unused-vars
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import * as Styled from "./styles.js";
import { Input } from "../Input";
// import P from 'prop-types'
import { Button } from "../Button";
// import { CheckBox } from '../CheckBox'
import { useDataContext } from "../../hooks/useDataContext.jsx";
import { useGlobalContext } from "../../hooks/useGlobalContext.jsx";
import { toast } from "react-toastify";

const initialFormData = {
    id: null,
    heading: null,
    content: null,
    category: null,
    created_at: "now",
};

export const AnnotationForm = () => {
    const [dataState, dataActions] = useDataContext();
    const [globalState, globalActions] = useGlobalContext();
    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        setFormData({ ...formData, category: globalState.selectedCategory });
    }, []);

    useEffect(() => {
        if (globalState.selectedAnnotation) {
            setFormData(globalState.selectedAnnotation);
        }
        console.log(formData);
    }, []);

    const handleCancel = () => {
        globalActions.setEditMode(false);
        globalActions.setSelectedAnnotation(null);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.category) {
            toast.warn("Escolha uma categoria");
            toast.clearWaitingQueue();
        } else {
            if (formData.id === null) {
                dataActions.addNewAnnotation({
                    ...formData,
                    id: +(Math.random() * 100000000).toFixed(),
                });
                console.log(formData);
                globalActions.setEditMode(false);
                toast.success("Anotado!", { toastId: "success-anoted-toast" });
                toast.clearWaitingQueue();
            } else {
                dataActions.removeAnnotation(formData);
                dataActions.addNewAnnotation({ ...formData });
                console.log(formData);
                globalActions.setEditMode(false);
            }
        }
    };

    return (
        <Styled.Form>
            <label htmlFor="note-title">Título</label>
            <span>
                <Input
                    name="note-title"
                    defaultValue={globalState.selectedAnnotation?.heading || ""}
                    maxLength="100"
                    placeholder="..."
                    autoFocus
                    onChange={(e) =>
                        setFormData({ ...formData, heading: e.target.value })
                    }
                />
            </span>
            <span>
                <select
                    name="nonte-category"
                    onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                    }
                    className="margin-right"
                >
                    <option
                        value=""
                        disabled
                        selected={globalState.selectedCategory === null}
                    >
                        Selecione uma categoria
                    </option>

                    {dataState.categories.map((category) => (
                        <option
                            selected={
                                globalState.selectedAnnotation?.category ===
                                    category.name ||
                                globalState.selectedCategory === category.name
                            }
                            value={category.name}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
                {/* <CheckBox
                    label="Favorito"
                    name="Favorite"
                    value={true}
                    
                    onChange={(e) => setFormData({ ...formData, favorite: e.target.value })}
                    width={`fit-content`} /> */}
            </span>
            <label htmlFor="note-content">Mensagem</label>
            <span>
                <Input
                    height="200px"
                    maxLength="999"
                    name="note-content"
                    as="textarea"
                    placeholder="..."
                    onChange={(e) =>
                        setFormData({ ...formData, content: e.target.value })
                    }
                    defaultValue={globalState.selectedAnnotation?.content || ""}
                />
            </span>
            <span>
                <Button onClick={() => handleCancel()} type="button">
                    Cancelar
                </Button>
                <Button
                    onClick={(e) => handleSubmit(e)}
                    type="submit"
                    primary="true"
                >
                    Enviar
                </Button>
            </span>
        </Styled.Form>
    );
};
