type CategoryType = {
    id: number;
    name: string;
    color?: string;
};

type AnnotationType = {
    id: number;
    heading?: string | null;
    content: string;
    category: string;
    created_at: string | number;
};

export interface initialDataType {
    categories: CategoryType[];
    annotations: AnnotationType[];
}

export const initialData: initialDataType = {
    categories: [
        {
            id: 1,
            name: "Notas do desenvolvedor",
            color: "crimson",
        },
    ],
    annotations: [
        {
            id: 1,
            heading: "Obrigado por testar meu projeto.",
            content: `Aqui você pode salvar, ler e editar anotações organizadas por categorias.
            \n Além disso é possível alterar o tema e o layout de apresentação das anotações.
            \n Para maiores detalhes, você pode conferir o código no Github, basta acessar pelo link no final da página.
            \n 
            \n - Gu`,
            category: "Notas do desenvolvedor",
            created_at: "",
        },
        {
            id: 2,
            heading: null,
            content: `Você pode começar clicando em 'Adicionar'. `,
            category: "Notas do desenvolvedor",
            created_at: "",
        },
    ],
};
