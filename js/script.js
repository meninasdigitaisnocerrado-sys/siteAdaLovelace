/*se os campos nome e endereço estiverem preenchidos
    envie os dados
senão
    peça para que preencha os campos
*/

//dequemviraoevento.addEventListener]("evento",oquedevefazer)

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
    if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != ""){
        alert("Prontinho! Você receberá as novidades por email e telefone ")
    }else{
        alert("Preencha todos os campos por favor")
    }
}
