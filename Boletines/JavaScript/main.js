//obtener los elementos de la clase .close//


//Recorrerlos//
links.forEach(function(link){

//agregar un evento click a cada uno de ellos//
link.addEventListener("click",function(ev){    
ev.preventDefault();

});
});
//como quitar y poner clases//
let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
icono.classList.remove("far");
icono.classList.add("far");
//Movernos entre documentos//
location.href = "/"

})


