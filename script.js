const text_entrada = document.getElementById("entrada"); 
const text_saida = document.getElementById("saida"); 
const displayImage = document.getElementById("display-image"); 

const matriz = [
  ["e", "enter"], 
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"]
];

// função de validaçao inicial
function validarTexto(texto) {
  const regex = /^[a-z\s]+$/; 
  return regex.test(texto);
}

function Encriptar() {
  const textoEntrada = text_entrada.value.toLowerCase();
  
  if (!validarTexto(textoEntrada)) { // Valida o texto de entrada
    alert("Por favor, digite apenas letras minúsculas, sem acento e com ou sem espaço.");
    return;
  }
  
  const textoEncriptado = trocaPalavras(textoEntrada, false); 
  text_saida.value = textoEncriptado; 
  text_saida.classList.remove("invisible");
  displayImage.classList.add("invisible"); 
  document.getElementById("output-text").textContent = "Texto encriptado"; 
  text_entrada.value = ""; 
}

function Decriptar() {
  const textoSaida = text_saida.value.toLowerCase(); 
  
  if (!validarTexto(textoSaida)) { 
    alert("Por favor, digite apenas letras minúsculas, sem acento e com ou sem espaço.");
    return;
  }
  
  const textoDescriptado = trocaPalavras(textoSaida, true); 
  text_entrada.value = textoDescriptado; 
  text_saida.value = ""; 
  text_saida.classList.add("invisible");
  displayImage.classList.remove("invisible"); 
  document.getElementById("output-text").textContent = "Texto decriptado"; 
}

function trocaPalavras(texto, decriptar = false) {
  for (let i = 0; i < matriz.length; i++) {
    const palavraOriginal = matriz[i][0]; 
    const palavraSubstituta = matriz[i][1]; 

    if (decriptar) { 
      const regex = new RegExp(palavraSubstituta, "g"); 
      texto = texto.replace(regex, palavraOriginal); // Substitui todas as ocorrências da palavra substituta pela palavra original
    } else { // Se estivermos encriptando
      const regex = new RegExp(palavraOriginal, "g"); // Cria uma expressão regular para substituir a palavra original pela palavra substituta
      texto = texto.replace(regex, palavraSubstituta); // Substitui todas as ocorrências da palavra original pela palavra substituta
    }
  }

  return texto; // Retorna o texto modificado
}

function btnCopiar() {
  // Obtém o texto de saída
  const textoSaida = text_saida.value; 
  
  if (textoSaida !== "") {
    text_saida.select(); // Seleciona o conteúdo do campo de saída
    document.execCommand("copy"); // Copia o texto para a área de transferência
    alert("Texto copiado para a área de transferência!");
    text_saida.classList.remove("invisible"); // Remove a classe invisível para exibir o campo de saída
    displayImage.classList.add("invisible"); // Adiciona a classe invisível para ocultar a imagem de exibição
  }
}
