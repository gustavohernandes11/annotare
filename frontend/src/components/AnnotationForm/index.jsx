// eslint-disable-next-line no-unused-vars
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import * as Styled from "./styles.js";
import { Input } from "../Input";
import { Button } from "../Button";
// import P from 'prop-types'
import { useDataContext } from "../../hooks/useDataContext.jsx";
import { useGlobalContext } from "../../hooks/useGlobalContext.jsx";
import { toast } from "react-toastify";

const initialFormData = {
    id: null,
    heading: null,
    content: null,
    category: null,
    created_at: null,
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
    }, []);

    const handleCancel = () => {
        globalActions.setEditMode(false);
        globalActions.setSelectedAnnotation(null);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.content) {
            toast.warn("Preencha o campo da mensagem.", {
                toastId: "warn-no-content-toast",
            });
            toast.clearWaitingQueue();
            return;
        }
        if (!formData.category) {
            toast.warn("Escolha uma categoria.", {
                toastId: "warn-no-category-toast",
            });
            toast.clearWaitingQueue();
            return;
        } else {
            if (formData.id === null) {
                const now = new Date().toLocaleDateString();
                dataActions.addNewAnnotation({
                    ...formData,
                    id: +(Math.random() * 100000000).toFixed(),
                    created_at: now,
                });
                globalActions.setEditMode(false);
                toast.success("Anotado!", { toastId: "success-anoted-toast" });
                toast.clearWaitingQueue();
            } else {
                setFormData({ ...formData });

                dataActions.removeAnnotation(formData);
                dataActions.addNewAnnotation({
                    ...formData,
                });

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
                    name="note-category"
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
