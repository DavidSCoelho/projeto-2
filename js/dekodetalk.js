var code = document.getElementById('code')
var copia = document.querySelector('.texto')
var opt = document.querySelector('#opt')
let encode = document.querySelector('#encode')
let decode = document.querySelector('#decode')
var saida = document.querySelector('#texto')

//funções de codificação
const codeB64 = () =>{
   return btoa(copia.value)
};
const decodeB64 = () => {
   return atob(copia.value)
};

const codeCaesarShift = () => {
   var str = copia.value
   var incremento = parseInt(opt.value)
   if (incremento < 0) {
      return codeCaesarShift(str, incremento + 26);
    }
 var output = "";

  for (var i = 0; i < str.length; i++) {
 
   var c = str[i];

    if (c.match(/[a-z]/i)) {
 
     var code = str.charCodeAt(i);

     // Letras Maiúsculas
     if (code >= 65 && code <= 90) {
       c = String.fromCharCode(((code - 65 + incremento) % 26) + 65);
     }

     // Letras Minúsculas
     else if (code >= 97 && code <= 122) {
       c = String.fromCharCode(((code - 97 + incremento) % 26) + 97);
     }
   }

   // Letras Alteradas
   output += c;
 }

 // Saída
 return output;
};

const decodeCaesarShift = () => {
   var str = copia.value
   var incremento = parseInt(opt.value)
   if (incremento < 0) {
      return decodeCaesarShift(str, incremento + 26);
    }
 var output = "";

  for (var i = 0; i < str.length; i++) {
 
   var c = str[i];

    if (c.match(/[a-z]/i)) {
 
     var code = str.charCodeAt(i);

     // Letras Maiúsculas
     if (code >= 65 && code <= 90) {
       c = String.fromCharCode(((code - 65 - incremento + 26) % 26) + 65);
     }

     // Letras Minúsculas
     else if (code >= 97 && code <= 122) {
       c = String.fromCharCode(((code - 97 - incremento + 26) % 26) + 97);
     }
   }

   // Letras Alteradas
   output += c;
 }

 // Saída
 return output;
};


//botões finais
encode.addEventListener('click', function(e){
   e.preventDefault()
if (code.value === "base64"){
   saida.innerText = codeB64()
} 
else if(code.value === "cifra"){
   saida.innerText = codeCaesarShift()
}
});

decode.addEventListener('click', function(e){
   e.preventDefault()
if (code.value === "base64"){
   saida.innerText = decodeB64()
} 
else if(code.value === "cifra"){
   saida.innerText = decodeCaesarShift()
}
});