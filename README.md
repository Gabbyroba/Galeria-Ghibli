# Galeria Studio Ghibli

Esta é uma galeria de filmes do Studio Ghibli, uma renomada produtora de animação japonesa. Nesta galeria, você encontrará informações sobre os filmes do Studio Ghibli, incluindo imagens dos pôsteres, descrições e outros detalhes.

## Conteúdo

- [Visão Geral](#visão-geral)
- [Demonstração](#demonstração)
- [Como Usar](#como-usar)
- [Contribuição](#contribuição)


## Visão Geral

O Studio Ghibli é conhecido por criar filmes de animação incrivelmente cativantes que combinam narrativas profundas com animações deslumbrantes. Esta galeria apresenta uma seleção de filmes do Studio Ghibli, com informações sobre cada filme, incluindo título, estúdio, descrição e imagem do pôster.

## Demonstração

Você pode ver a galeria em ação [aqui](https://gableriastudioghibli.netlify.app/).

## Como Usar

Para usar esta galeria em seu próprio projeto, siga estas etapas:

1. Clone ou faça o download deste repositório.

2. Inclua os arquivos JavaScript e CSS em seu HTML:

   ```html
   <link href="/dist/output.css" rel="stylesheet">
   <script type="module" src="/main.js"></script>
   ```

3. Certifique-se de que a estrutura HTML do seu projeto inclua um elemento com o ID "container-post" onde os filmes serão renderizados:

   ```html
   <section id="container-post"></section>
   ```

4. Certifique-se de que o conteúdo da galeria seja renderizado chamando a função `renderizarCatalogo()` em seu código JavaScript:

   ```javascript
   renderizarCatalogo();
   ```

5. Personalize o estilo da galeria conforme necessário, modificando as classes CSS no arquivo `output.css`.

Agora, você terá uma galeria funcional do Studio Ghibli em seu projeto.

## Contribuição

Contribuições são bem-vindas! Se você deseja melhorar ou adicionar recursos a esta galeria, siga estas etapas:

1. Fork este repositório.

2. Crie uma branch com uma descrição significativa da sua contribuição.

3. Faça suas alterações ou adições.

4. Envie um pull request para este repositório.

Sua contribuição será revisada e mesclada se for aprovada.

