# 🎟️ Rifa Sorteio Web

Um site simples e intuitivo para realizar sorteios de rifas. Com ele, você pode importar uma planilha Excel com os dados dos compradores e rifas, exibir a lista de participantes e sortear um vencedor de maneira **automática e animada**.

## 🌐 Prévia do Site

🔗 [Clique aqui para acessar a prévia do site!](https://sorteio-rifa.vercel.app)

Veja a aplicação diretamente no Vercel e explore as funcionalidades!

## 🚀 Funcionalidades

- 📥 **Importação de planilha Excel** com os dados dos compradores (idRifa, nomeComprador).
- 👥 **Exibição da lista de participantes** e rifas compradas.
- 🎲 **Sorteio animado** de um vencedor com rolagem de nomes.
- 💾 **Armazenamento temporário** dos dados no `localStorage`.
- 📋 **Visualização da lista completa** de participantes antes do sorteio.

## 🗂️ Estrutura do Projeto

- **index.html**: Página principal onde o arquivo Excel é importado e o sorteio é realizado.
- **tabela.html**: Página onde a lista de compradores e rifas é exibida em uma tabela.
- **script.js**: Lógica do sorteio, manipulação da importação do Excel e exibição dos resultados.
- **style.css**: Arquivo CSS com o estilo do site.

## 📝 Como Usar

### 1️⃣ Importar Planilha Excel
Na página principal, faça o upload de uma planilha Excel com os dados no formato abaixo:

| idRifa | nomeComprador |
|--------|---------------|
| 1-20   | Breno Souza   |
| 2-5    | Ana Ferreira  |
| 3-2    | João Silva    |

> O id da rifa é composto por: **"{id da compra}-{número de rifas compradas}"**

### 2️⃣ Realizar Sorteio
Após a importação do arquivo:
- Clique em **"Sortear"** para iniciar o sorteio com animação de nomes passando.
- Ao final da animação, o vencedor será exibido na tela.

### 3️⃣ Exibir Lista de Compradores
Para visualizar a lista completa dos compradores e rifas antes do sorteio, clique em **"Mostrar Lista de Compradores"**. Isso abrirá uma nova página com a tabela de compradores e rifas.

## 🛠️ Tecnologias Utilizadas

- 🌐 **HTML5**
- 🎨 **CSS3**
- 🛠️ **JavaScript** (com a biblioteca `SheetJS` para leitura de arquivos Excel)
- 💾 **LocalStorage** para armazenamento temporário dos dados
