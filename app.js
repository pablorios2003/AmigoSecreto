//Inicializamos las variables
let NombreAmigo = [];
let NombreSortado = [];
let NumeroDeSorteos = 1;
let lista =  document.getElementById("listaAmigos");


//Facilitamos la manera de traer un elemento del HTML
function TraerHTMLS(Id,Texto){
   let ElementoHTML = document.getElementById(Id);
    ElementoHTML.innerHTML = Texto;

}

//Funcion para agregar nombre de amigos a la lista a sortear 
function agregarAmigo(){
    //Traemos el valor del campo 
    let Amigo = document.getElementById('amigo').value;
    //Validamos que no se aun campo vacio
    if (Amigo == "" || Amigo == " "){
        alert("Por favor agrega un nombre valido");
    }else {
        //Agregamos el nombre al array      
        NombreAmigo.push(Amigo);
        //Limpiamos el campo para otro nombre 
        LimpiarCampo();
        //Mostrarmos los nombres agregados en la pantalla
        MostrarAmigos();
    }
   
}
//Sorteo del amigo secreto
function sortearAmigo(){ 
    //Validar que el usuario no pueda jugar mas si ya estan todos sorteados
    if(NombreAmigo.length == ""){
        alert("No hay Nombres para sortear");
    }
    else {
        if(NumeroDeSorteos > NombreAmigo.length){
            alert("Ya no hay mas nombres para sortear");
            let Boton = document.getElementById('Sorteo');
            Boton.setAttribute('disabled',true);
        }else {
            let Sorteo = AmigoAleatorio();
            TraerHTMLS('resultado',`Tu amigo secreto es: ${NombreAmigo[Sorteo]}`);
            NumeroDeSorteos ++;
        }
    }


}

//Funcion para el numero al azar 
function AmigoAleatorio(){
   let NumeroAleatorio = Math.floor(Math.random()*NombreAmigo.length);

    //Validar que no se repita el numero y no haya dos con el mismo Amigo secreto
    if(NombreSortado.includes(NumeroAleatorio)){
        return AmigoAleatorio();
    }else {
        NombreSortado.push(NumeroAleatorio);
        return NumeroAleatorio;
        
    }
}

//Funcion para limpiar el campo donde se digita el nombre
function LimpiarCampo(){
    document.getElementById('amigo').value = '';
   
}

function actualizarListaAmigos() {
    // Obtener el elemento <ul> donde agregaremos los <li>
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el array de amigos
    for (let i = 0; i < NombreAmigo.length; i++) {
        // Crear un nuevo <li> para cada amigo
        let li = document.createElement("li");
        li.textContent = NombreAmigo[i];  // Asignar el nombre del amigo al <li>

        // Agregar el <li> a la lista <ul>
        lista.appendChild(li);
    }
}

function MostrarAmigos(){
    //Obtener el elemento de la lista
    const Lista = document.getElementById('listaAmigos');

    //Limpiar la lista existente
       lista.innerHTML = " ";

       for (let i=0; i <NombreAmigo.length;i++){
        //Crear un nuevo elemento <li>
        const li = document.createElement('li');
        // Asignar el texto del amigo al elemento <li>
        li.textContent = NombreAmigo[i];
        // Agregar el <li> a la lista
        lista.appendChild(li);
       }
}

   





