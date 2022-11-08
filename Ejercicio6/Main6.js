/* Ejercicio 6
 Crea un array de 3 pokemons, el tipo de dato a usar será un objeto. Deberá contener nombre, tipoDePokemon.
 Crea una condición y si el tipo de pokemon es fuego muestra por consola el mensaje ¡Es un pokemon de fuego!.*/


 //Crea un array de 3 pokemons, el tipo de dato a usar será un objeto. Deberá contener nombre, tipoDePokemon.
 const pokemons = [
    {
        nombre: 'Onyx',
        tipo:'Roca',
    },
    {
        nombre: 'Bulbasaur',
        tipo: 'planta',
    },
    {
        nombre: 'Charizard',
        tipo: 'fuego',
    },
 ];
 //Crea una condición y si el tipo de pokemon es fuego muestra por consola el mensaje ¡Es un pokemon de fuego!.*/

if (pokemons[0].tipo === 'fuego') {
    console.log('¡Es un pokemon de fuego! ');
  } else if (pokemons[1].tipo === 'fuego') {
    console.log('¡Es un pokemon de fuego! ');
  } else if (pokemons[2].tipo === 'fuego') {
    console.log('¡Es un pokemon de fuego! ');
  };


for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    if (pokemon.tipo === 'fuego') {
      console.log(pokemons[2].nombre + ' ¡Es un pokemon de fuego!');
    }
  }