// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let elementoAmigo = document.getElementById('amigo').value;
    console.log(elementoAmigo);

    if(elementoAmigo === ''){
        alert('Por favor, inserte un nombre');
        return;
    } else{
        amigos.push(elementoAmigo);
    }
    limpiar();
}

function limpiar(){
    document.querySelector("#amigo").value = "";
}