const futbolitoTeam = [
	{
		nombre: 'canallin',
		juegos: {
			perdidos: 15,
			ganados: 1
		},
		sueldo: 1
	},
	{
		nombre: 'pedro el malo',
		juegos: {
			perdidos: 80,
			ganados: 2
		},
		sueldo: 2.5
	},
	{
		nombre: 'shaparro puto',
		juegos: {
			perdidos: 10,
			ganados: 5
		},
		sueldo: 10
	},
	{
		nombre: 'jugo',
		juegos: {
			perdidos: 15,
			ganados: 3
		},
		sueldo: 3
	}
]

console.log('futbolitoTeam', futbolitoTeam);

function agregaAnalisis(futbolista, index, array) {
	const { juegos: {
		ganados,
		perdidos
	}} = futbolista;
	
	//console.log('index', index);
	//console.log(array[ (index >= 3) ? 0 : index + 1])
	
	const analisis = {
		jugados: ganados + perdidos,
		ganados,
		perdidos
	} 
	
	const newFutbolista = {...futbolista,
		analisis
	};
	
	delete newFutbolista.juegos;
	
	return newFutbolista;
}

const listaPartidosJugados = futbolitoTeam.map( agregaAnalisis );

console.log('listaPartidosJugados',listaPartidosJugados);

const futbolistasPerdedores =  futbolitoTeam.filter ( elemento => elemento.juegos.perdidos >= 15 )

const futbolistasGanadores =  futbolitoTeam.filter ( shaparroElemento => {
	// regresa un boolean
	return (shaparroElemento.juegos.ganados >= 5);
})

console.log('futbolistasPerdedores', futbolistasPerdedores);
console.log('futbolistasGanadores', futbolistasGanadores);


const futbolistaPerdedor = futbolitoTeam.reverse().find ( 
	elemento => elemento.juegos.perdidos >= 15 
)

console.log('futbolistaPerdedor', futbolistaPerdedor);

let juegosJugadosEnTotalDeTodosLosJugadores = listaPartidosJugados.reduce( (element1, element2) => {
	if (element1.analisis ){
		return element1.analisis.jugados + element2.analisis.jugados
	}else{
		return element1 + element2.analisis.jugados
	}
})


console.log('juegosJugadosEnTotalDeTodosLosJugadores', juegosJugadosEnTotalDeTodosLosJugadores);


let total = [20,43,54,51].reduce( (oldValue, newValue) => {
	return oldValue + newValue;
});

//20, 43 ----> 20
//20, 54 ----> 20
//20, 51 ----> 20


console.log('total', total);


let jugadoresConcentrado = listaPartidosJugados.reduce( (element1, element2) => {
	const newElement = {...element1,
		nombre: `${ element1.nombre }, ${ element2.nombre }`
	}
	return newElement;
})

console.log('jugadoresConcentrado',jugadoresConcentrado);

let jugadorMejorPagado = futbolitoTeam.reduce( (jugador1, jugador2) => {
	console.log(jugador1);
	console.log(jugador2);
	return jugador1.sueldo > jugador2.sueldo ? jugador1 : jugador2;
})

console.log(jugadorMejorPagado);