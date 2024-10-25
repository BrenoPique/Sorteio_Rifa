document
  .getElementById("fileInput")
  .addEventListener("change", handleFile, false);
document.getElementById("sortearBtn").addEventListener("click", sortear, false);
document
  .getElementById("mostrarListaBtn")
  .addEventListener("click", mostrarListaCompradores, false);

let rifas = [];

function handleFile(e) {
  const file = e.target.files[0];
  const reader = new FileReader();

  if (!file) return; // Se não houver arquivo selecionado, não faz nada

  // Limpar o localStorage ao selecionar um novo arquivo
  localStorage.removeItem("rifas");

  reader.onload = function (event) {
    const data = new Uint8Array(event.target.result);
    const workbook = XLSX.read(data, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    rifas = [];
    for (let i = 1; i < jsonData.length; i++) {
      const idRifa = jsonData[i][0];
      const nomeComprador = jsonData[i][1];

      // Converte o idRifa para string
      const idRifaStr = String(idRifa);

      if (idRifaStr.includes("-")) {
        // Se o idRifa estiver no formato "compra-quantidade"
        const [compra, quantidade] = idRifaStr.split("-").map(Number);

        // Cria uma rifa individual para cada quantidade comprada
        for (let j = 1; j <= quantidade; j++) {
          rifas.push({ idRifa: `${compra}-${j}`, nomeComprador });
        }
      } else {
        // Caso o idRifa seja apenas um número (sem "-")
        rifas.push({ idRifa: `${idRifa}`, nomeComprador });
      }
    }
  };

  reader.readAsArrayBuffer(file);
}

function sortear() {
  if (rifas.length === 0) {
    alert("Por favor, importe um arquivo Excel primeiro.");
    return;
  }

  const resultadoDiv = document.getElementById("resultado");
  let interval;
  let tempoSorteio = 15; // segundos

  // Limpa qualquer estilo antigo e texto
  resultadoDiv.textContent = "";
  resultadoDiv.classList.remove("ganhador");

  // Iniciar a animação dos nomes
  interval = setInterval(() => {
    const indexAleatorio = Math.floor(Math.random() * rifas.length);
    const nomeAleatorio = `${rifas[indexAleatorio].nomeComprador} | ID Rifa: ${rifas[indexAleatorio].idRifa}`;
    resultadoDiv.textContent = nomeAleatorio;
  }, 100); // Troca de nome a cada 100 milissegundos

  setTimeout(() => {
    clearInterval(interval); // Para a animação

    // Escolher o ganhador final
    const indexGanhador = Math.floor(Math.random() * rifas.length);
    const ganhador = rifas[indexGanhador];

    // Exibe o ganhador final e altera o estilo
    resultadoDiv.textContent = `${ganhador.nomeComprador} | ID Rifa: ${ganhador.idRifa}`;
    resultadoDiv.classList.add("ganhador"); // Adiciona a classe para mudar o estilo
  }, tempoSorteio * 1000);
}

function mostrarListaCompradores() {
  if (rifas.length === 0) {
    // Verificar os dados no localStorage apenas ao carregar a página da tabela
    rifas = JSON.parse(localStorage.getItem("rifas")) || [];
    if (rifas.length === 0) {
      alert("Por favor, importe um arquivo Excel primeiro.");
      return;
    }
  }

  // Armazenar os dados das rifas no localStorage antes de redirecionar para a página da tabela
  localStorage.setItem("rifas", JSON.stringify(rifas));

  // Redirecionar para a página tabela.html
  window.location.href = "tabela.html";
}

// Limpar ou carregar dados do localStorage ao carregar a página
window.onload = function () {
  rifas = JSON.parse(localStorage.getItem("rifas")) || [];
};
  