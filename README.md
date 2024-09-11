# Rifa Sorteio Web

Um site simples de sorteio de rifas. Com ele, é possível importar uma planilha Excel com os dados dos compradores e rifas, exibir a lista de participantes e sortear um vencedor de maneira automática e animada.

## Funcionalidades

- Importação de planilha Excel com os dados dos compradores (idRifa, nomeComprador)
- Exibição da lista de participantes e rifas compradas
- Sorteio de um vencedor com animação de nomes passando
- Armazenamento temporário dos dados no `localStorage`
- Opção de visualizar a lista completa dos participantes antes do sorteio

## Estrutura do Projeto

- **index.html**: Página principal onde o arquivo Excel é importado e o sorteio é realizado.
- **tabela.html**: Página onde a lista de compradores e rifas é exibida em uma tabela.
- **script.js**: Lógica do sorteio, manipulação da importação do Excel e exibição dos resultados.
- **style.css**: Arquivo CSS contendo o estilo do site.

## Como Usar

### 1. Importar Planilha Excel
Na página principal, faça o upload de uma planilha Excel contendo os dados no seguinte formato:

| idRifa | nomeComprador |
|--------|---------------|
| 1-20   | Breno Souza   |
| 2-5    | Ana Ferreira  |
| 3-2    | João Silva    |

(O id da rifa é composto por: "{id da compra}-{número de rifas compradas}" )

### 2. Realizar Sorteio
Após a importação do arquivo:
- Clique em "Sortear" para iniciar o sorteio com animação de nomes passando.
- Ao final da animação, o vencedor será exibido na tela.

### 3. Exibir Lista de Compradores
Para visualizar a lista completa dos compradores e rifas antes do sorteio, clique em "Mostrar Lista de Compradores". Isso abrirá uma nova página exibindo a tabela de compradores e rifas.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (com a biblioteca `SheetJS` para leitura de arquivos Excel)
- LocalStorage para armazenamento temporário dos dados
