-Jogo da Velha em JavaScript Puro com Factory Function-

Projeto criado em 2023 enquanto aprendia JavaScript 

Este projeto é uma implementação clássica do Jogo da Velha (ou Tic-Tac-Toe) utilizando JavaScript puro e Factory Functions. O objetivo do jogo é simples: dois jogadores alternam suas jogadas em um tabuleiro 3x3, e o primeiro a formar uma linha com três símbolos iguais (X ou O) vence. Caso todas as casas sejam preenchidas sem um vencedor, o jogo termina em empate.

Como Funciona?
O Jogo da Velha foi construído com o uso do JavaScript puro, ou seja, sem a necessidade de bibliotecas externas como jQuery. Isso permite um entendimento claro da lógica por trás da implementação do jogo. A Factory Function foi utilizada para criar as instâncias de jogador e tabuleiro, proporcionando uma estrutura modular e reutilizável.

Principais Funcionalidades:
Tabuleiro 3x3: O jogo é jogado em um tabuleiro 3x3, representado por um array, onde cada célula pode ser preenchida com um X, O ou ficar vazia.

Jogadores: O jogo permite que dois jogadores alternem entre as jogadas, onde um é representado por X e o outro por O. Cada jogador é criado utilizando a Factory Function, que permite a criação de jogadores de forma eficiente.

Verificação de Vencedor: O jogo verifica as condições de vitória, checando se algum jogador conseguiu alinhar três símbolos (horizontalmente, verticalmente ou diagonalmente). Caso não haja vencedor, o jogo verifica se houve empate.

Interface Simples: A interface do jogo é simples e interativa, onde os jogadores clicam nas células do tabuleiro para fazer suas jogadas. O estado do jogo é atualizado após cada movimento
