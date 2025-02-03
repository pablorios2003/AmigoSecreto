//Inicializamos las variables
let NombreAmigo = [];
let NombreSortado = [];
let NumeroDeSorteos = 1;
let lista =  document.getElementById("listaAmigos");


//Facilitamos la manera de traer un elemento del HTML
function TraerHtmlConTexto(Id,Texto){
   let ElementoHTML = document.getElementById(Id);
    ElementoHTML.innerHTML = Texto;
}
function TraerHtmlSinTexto(id){
    return document.getElementById(id);
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
            //Condicionamos para que no se intenta mas de la cantidad de nombres disponibles
            alert("Ya no hay mas nombres para sortear");
            //Traer elementos 
            let BotonSortear = TraerHtmlSinTexto('Sorteo');
            let BotonAñadir = TraerHtmlSinTexto('btnAñadir');
            //Agregar atributo para no poder usarse
            BotonAñadir.setAttribute('disabled',true);
            BotonSortear.setAttribute('disabled',true);
        }else {
            //Sorteamos el nombre y se lo mostramos al usuario
            let Sorteo = AmigoAleatorio();
            TraerHtmlConTexto('resultado',`Tu amigo secreto es: ${NombreAmigo[Sorteo]}`);
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

   





