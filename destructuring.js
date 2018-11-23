const developer = {
	nombre: 'shaparron',
	edad: 1000,
	alias: 'shaparro.js',
	saluda: function(){
		console.log("Hola soy el shapa");
	},
	cv: {
		anios_trabajando: 5,
		puesto: 'java developer',
		tareas: {
			customer_care: 'atender helpdesk',
			delivery_service: 'desarrollo de nuevos features',
			innovation: 'desarrollo de nuevas tecnologias como esta y no la tuesta'
		}
	}
	
}

const developer2 = {
	nombre: 'shaparron2',
	edad: 1000,
	alias: 'shaparro.js',
	saluda: function(){
		console.log("Hola soy el shapa");
	},
	cv: {
		anios_trabajando: 5,
		puesto: 'java developer',
		tareas: {
			customer_care: 'atender helpdesk',
			delivery_service: 'desarrollo de nuevos features',
			innovation: 'desarrollo de nuevas tecnologias como esta y no la tuesta'
		}
	}
	
}

const developer3 = {
	nombre: 'shaparron3',
	edad: 1000,
	alias: 'shaparro.js',
	saluda: function(){
		console.log("Hola soy el shapa");
	},
	cv: {
		anios_trabajando: 5,
		puesto: 'java developer',
		tareas: {
			customer_care: 'atender helpdesk',
			delivery_service: 'desarrollo de nuevos features',
			innovation: 'desarrollo de nuevas tecnologias como esta y no la tuesta'
		}
	}
	
}

const developer4 = {
	nombre: 'shaparron4',
	edad: 1000,
	alias: 'shaparro.js',
	saluda: function(){
		console.log("Hola soy el shapa");
	},
	cv: {
		anios_trabajando: 5,
		puesto: 'java developer',
		tareas: {
			customer_care: 'atender helpdesk',
			delivery_service: 'desarrollo de nuevos features',
			innovation: 'desarrollo de nuevas tecnologias como esta y no la tuesta'
		}
	}
	
}

const developers = [developer,developer2,developer3,developer4]

console.log(developers);

const newArray = [...developers, {...developer}];

console.log(newArray);

console.log('indice 0',newArray[0].nombre)
console.log('indice 4', newArray[4].nombre)

newArray[4].nombre = 'Canaya (   .    )Y(   .    )  (____*____)  3====================D *';

console.log('indice 0',newArray[0].nombre)
console.log('indice 4', newArray[4].nombre)


function ajaxDummy(developer){
	/*
	let nombre = developer.nombre;
	let edad = developer.edad;
	let alias = developer.alias;
	*/
	
	let { nombre: name, edad, alias, saluda, cv} = developer;

	let {puesto, anios_trabajando, tareas: {
		customer_care
	} } = cv;
	
	console.log('nombre', name);
	console.log('edad', edad);
	console.log('alias', alias);
	console.log('anios_trabajando', anios_trabajando);
	console.log('tarea importante', customer_care)
	
//	saluda();	
//	developer.saluda();
}

function clonaDeveloper(developer){
	return {...developer};
}

function clonaDeveloperYCambiaNombre(developer, nombre, edad){
	return {...developer,
			nombre,
			edad
	};
}

function clonaDeveloperyCV(developer, {anios_trabajando,puesto}){
	let {
		cv: {
			tareas
		}
	} = developer

	const {cv} = developer;
	
	const newCv = {
		...cv,
		anios_trabajando,
		puesto
	}
	
	console.log(newCv)
	
	return {...developer,
			nombre,
			cv: newCv
	};
}


//ajaxDummy(developer);

//let dev2 = clonaDeveloper(developer);
const nombre = 'hugo';
//let dev2 = clonaDeveloperYCambiaNombre(developer, 'canaya', 20);
let dev2 = clonaDeveloperyCV(developer, {
	anios_trabajando: 2,
	puesto: 'sopibecario',
}
);

console.log('developer', developer)
console.log('dev2', dev2)

//dev2.nombre = 'Luis';

//console.log('developer', developer)
//console.log('dev2', dev2)
