// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
   let listAmigos = document.getElementById('amigo').value;
   if (listAmigos.length === 0) {
      alert('Por favor, inserte un nombre');
      } else {amigos.push(listAmigos);
         console.log(amigos);
         //cantidad de elementos
         console.log('cantidad', amigos.length);
         //muestra el ultimo elemento de la lista
         console.log('ultimo ele',amigos[amigos.length-1]);
         recorreListaAmigos()  
        }
  limpiarnombre();
   return;
}

function limpiarnombre() {
   document.querySelector('#amigo').value = '';
   return;
}

function recorreListaAmigos() {
   let elementoHTML = document.querySelector('#listaAmigos');
   elementoHTML.innerHTML = ''; 
   amigos.forEach(amigo => {
       let li = document.createElement('li'); 
       li.textContent = amigo; 
       elementoHTML.appendChild(li); 
       console.log('cantidad', elementoHTML.innerHTML);
   });
   return;
}

function sortearAmigo(){
   let numAmigo = Math.floor(Math.random()*amigos.length);
       if(amigos.length === 0){
           alert("La lista está vacia.");
        }
        else{
           if(amigos.length === 1){
               alert("Debes de ingresar al menos dos amigos para sortear");
           }
           else{
              
               let resultadoSorteoHTML = document.getElementById('resultado');
               resultadoSorteoHTML.innerHTML = amigos[numAmigo];
               amigos.splice(numAmigo, 1);
               recorreListaAmigos();
           }
           
       }   
   return;
}

