# maquina-de-doces

Este código HTML define uma página que apresenta uma "Máquina de Doces" com uma interface de usuário simples. A página tem dois elementos principais: o visor e a seção de produtos.

O visor é uma área na parte superior da página que exibe o dinheiro inserido pelo usuário e contém botões para adicionar notas de R$ 2, R$ 5 e R$ 10 à máquina. Os elementos de botão são filhos do elemento div com a classe .notas, enquanto o valor do dinheiro inserido é exibido dentro do elemento p com o id dinheiro-inserido-valor.

A seção de produtos é uma área abaixo do visor que exibe três tipos de doces que podem ser comprados. Cada produto é apresentado com uma imagem, nome, preço e botão "Comprar". Os elementos de cada produto são filhos do elemento div com a classe .produto.

Para adicionar a funcionalidade da máquina de doces, é necessário incluir um arquivo JavaScript externo com o nome script.js. Esse arquivo provavelmente contém o código que gerencia o dinheiro inserido pelo usuário, registra as compras e atualiza a exibição do dinheiro e produtos na página.

# Elementos HTML

- `<!DOCTYPE html>`: Esta é uma declaração que informa ao navegador que o documento é um documento HTML.
- `<html>`: A tag raiz que envolve todo o conteúdo HTML.
- `<head>`: A seção do cabeçalho do documento que contém metadados e links para arquivos externos.
- `<meta>`: Define informações sobre o documento, como o conjunto de caracteres e a descrição.
- `<title>`: Define o título da página.
- `<link>`: Link para um arquivo externo de estilo CSS.
- `<body>`: A seção do corpo do documento que contém todo o conteúdo visível na página.
- `<h1>`: Define um título principal na página.
- `<div>`: Define uma seção do documento.
- `<img>`: Define uma imagem a ser exibida na página.
- `<h2>`: Define um título secundário.
- `<p>`: Define um parágrafo de texto.
- `<button>`: Define um botão que o usuário pode clicar.
- `id`: Define um identificador exclusivo para um elemento HTML.
- `class`: Define uma classe para um elemento HTML.

# Classes CSS

- `.visor`: Define o estilo para a seção de visor da máquina de doces.
- `.notas`: Define o estilo para a seção de notas da máquina de doces.
- `.dinheiro-inserido`: Define o estilo para a seção de dinheiro inserido da máquina de doces.
- `.produtos`: Define o estilo para a seção de produtos da máquina de doces.
- `.produto`: Define o estilo para cada produto exibido na seção de produtos.

# Arquivo JavaScript

- `script.js`: Arquivo JavaScript que contém o código para gerenciar a máquina de doces. O código provavelmente contém funções que registram o dinheiro inserido pelo usuário, verificam se há dinheiro suficiente para comprar um produto e atualizam a exibição da página com as informações corretas.
