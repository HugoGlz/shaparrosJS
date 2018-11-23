
/*
setTimeout( function(){
    console.log('llamada a API 1')
    setTimeout( function(){
          console.log('llamada a API 2')
           setTimeout( function(){
               console.log('llamada a API 4')
       }, 3000)
    }, 2000);
},1000)
*/

let promesa =  new  Promise( function(todoBien, todoMal) {
    //todoBien('Todo salio bien');
    //todoMal('todo salio mal')

    setTimeout( function(){
        todoBien('Todo salio bien');
    }, 3000);
});

let promesa2 =  new  Promise( function(todoBien, todoMal) {
    //todoBien('Todo salio bien');
    //todoMal('todo salio mal')

    setTimeout( function(){
        todoBien(100);
    }, 4000);
});

let promesa3 =  new  Promise( function(todoBien, todoMal) {
    //todoBien('Todo salio bien');
    //todoMal('todo salio mal')

    setTimeout( function(){
        todoBien({nombre: 'shaparro', edad:1000, puesto: 'shapadev'});
    }, 1000);
});

/*promesa.
    then(function (mensaje){
        console.log(mensaje);
    }) //todo bien
    .catch( function(mensajeError){
        console.trace(mensajeError);
    })*/

async function cargaPromesa(){
    let mensaje = await promesa;
    console.log('mensaje', mensaje);
}

//cargaPromesa();

Promise.race([
    promesa3,
    promesa2,
    promesa
]).then( respuestas => 
    console.log(respuestas)
);




mandaMensaje = mensaje => alert("mensaje:" + mensaje)

mandaMensaje2 = (saluda, nombre) => console.log(`${saluda} a ${nombre}`)

function construyeMensajePrimitivo (saluda, nombre){
    return `${saluda} a ${nombre}`
}

construyeMensajePro = (saluda, nombre) => {
    console.log("Estamos entrando a mensaje pro");
    return `${saluda} a ${nombre}`;
} 

 mandaMensaje('HOLA PUTITOS');
 mandaMensaje2('Hola', 'Shaparros');

 let mensajePrimitivo = construyeMensajePrimitivo('Hola', 'Shaparros');
 console.log(mensajePrimitivo)

 let mensajePro = construyeMensajePro('Hola', 'Hugoboot');
 console.log(mensajePro)


 function buildFunctionSaluda(saluda){
    return function(nombre){
        return function(apellido){
            console.log(`${saluda} a ${nombre} ${apellido} con funcion anidada`);
        }
    }
 }

 const saludaConHola = buildFunctionSaluda('Hola');
 const saludaEnIngles = buildFunctionSaluda('Hi');

 
 const saludaConApellido = saludaConHola('Saul');
 saludaConApellido('Bustamante')
 
 /*saludaConHola('Grillo');
 saludaConHola('Hugo');

 saludaEnIngles('Saul');
 saludaEnIngles('Grillo');
 saludaEnIngles('Hugo');

*/

