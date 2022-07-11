export const mockData = {
    categories: [
        {
            id: 1,
            name: "Notas do desenvolvedor",
            color: "green",
        },
    ],
    annotations: [
        {
            id: 1,
            heading: "Obrigado por testar meu projeto.",
            content: `Nesse projeto você pode salvar, ler e editar anotações organizadas por categoria.
            \n Além disso é possível alterar o tema (que ficará salvo para o próximo acesso), e o layout de apresentação das anotações.
             \n Para maiores detalhes, você pode conferir o código no Github, basta acessar pelo link no final da página.`,
            category: "Notas do desenvolvedor",
            created_at: "",
        },
        {
            id: 2,
            heading: null,
            content: `Você pode começar clicando em 'Adicionar'. `,
            category: "Notas do desenvolvedor",
            created_at: "",
        }
    ],
};
