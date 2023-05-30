const text_entrada = document.getElementById("entrada");
const text_saida = document.getElementById("saida");
const displayImage = document.getElementById("display-image");

let matriz = [
  ["a", "ai"],
  ["e", "enter"],
  ["i", "imes"],
  ["o", "ober"],
  ["u", "ufat"]
];

function Encriptar() {
  const textoEntrada = text_entrada.value.toLowerCase();
  const textoEncriptado = trocaLetras(textoEntrada);
  text_saida.value = textoEncriptado;
  text_saida.classList.remove("invisible");
  displayImage.classList.add("invisible");
  document.getElementById("output-text").textContent = "Texto encriptado";
  text_entrada.value = "";
}

function Decriptar() {
    const textoSaida = text_saida.value.toLowerCase();
    // parametro true para descriptografar o texto
    const textoDescriptado = trocaLetras(textoSaida, true);
    text_entrada.value = textoDescriptado;
    text_saida.value = "";
    // tornar o elementos text_saida e displayImage visiveis/invisiveis de acordo com status de uso da aplicação
    text_saida.classList.add("invisible");
    displayImage.classList.remove("invisible");
    // document.getElementById("output-text").textContent = "Texto decriptado";
    // document.getElementById("output-text").textContent = "Texto encriptado";
  }
  

function trocaLetras(texto, decriptar = false) {
  for (let i = 0; i < matriz.length; i++) {
    const letraOriginal = matriz[i][0];
    const letraSubstituta = matriz[i][1];

    if (decriptar) {
      texto = texto.split(letraSubstituta).join(letraOriginal);
      console.log("decriptação rodou");
    } else {
        texto = texto.split(letraOriginal).join(letraSubstituta);
        console.log("decriptação caiu no else , encriptando o texto");
    }
  }

  return texto;
}

function btnCopiar() {
  const textoSaida = text_saida.value;
  if (textoSaida !== "") {
    text_saida.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
    text_saida.classList.remove("invisible");
    displayImage.classList.add("invisible");
  }
}
