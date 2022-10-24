var codigo = document.getElementById('code')
var copia = document.querySelector('.texto')
var opcao = document.querySelector('#opt')
let codificar = document.querySelector('#encode')
let decodificar = document.querySelector('#decode')
var retorno = document.querySelector('#texto')
var alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function cesar(){
var conteudo = copia.value
var uppercut = conteudo.toUpperCase()
var formula = (number(opcao.value)%26)
var volta = ""
for (var d = 0; d < uppercut.length; d++) {
   for(var e = 0; e <alfabeto.length; e++ ); {
    if(uppercut[d] == alfabeto[e]){
         volta += alfabeto[e + formula];
         break;
    } else if(uppercut[d] == ' ') {
       volta +=' ';
       break;
    } 
    }
   } 
   return volta  
}

function dCesar(){
    var conteudo = copia.value
    var uppercut = conteudo.toUpperCase()
    var formula = (number(opcao.value)%26)
    var volta = ""
    for (var d = 0; d < uppercut.length; d++) {
       for(var e =uppercut.length; e >=0; e-- ); {
        if(uppercut[d] == alfabeto[e]){
             volta += alfabeto[e - formula];
             break;
        } else if(uppercut[d] == ' ') {
           volta +=' ';
           break;
        } 
        }
       } 
       return volta  
    }
    

codificar.addEventListener('click', function(e){
    e.preventDefault()
   if(codigo.value == "base64"){
   retorno.value = btoa(copia.value);

}else if(codigo.value == "cifra"){
  retorno.value = cesar()
}
})

decodificar.addEventListener('click', function(e){
    e.preventDefault()
    if(codigo.value == "base64"){
    retorno.value = atob(copia.value);
 
 }else if(codigo.value == "cifra"){
   retorno.value = dCesar()
 }
 })
