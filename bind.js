var nombre = 'Saul'

function saluda(){
    console.log(this.nombre);
    //this.dummy();
}

window.saluda();
this.saluda();

//this = window;

const otraInstancia = {
    nombre: 'Grillo',
    dummy: function(){
        console.log('aqui esta el dummy')
    }
}

const otraInstancia2 = {
    nombre: 'Hugo',
    dummy: function(){
        console.log('aqui esta el dummy para hugo')
    }
}

//this = otraInstancia
// bind clona el metodo saluda y lo guarda en saludaOtroContexto
let saludaOtroContexto = saluda.bind(otraInstancia);
//this =otraInstancia2
let saludaOtroContexto2 = saluda.bind(otraInstancia2);
//this = window
let saludaOtroContexto3 = saluda.bind(window);

//saluda.bind(otraInstancia2)();

//saludaOtroContexto();
//saludaOtroContexto2();