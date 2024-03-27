class Pokemon {
    nombre = '';
    altura = 0;
    numero = 0;
    ataques = [];

    constructor(nombre, altura, numero){
        this.nombre = nombre;
        this.altura = altura;
        this.numero = numero;
    }

    get datos(){
        return {
            nombre: this.nombre,
            altura: this.altura,
            numero: this.numero,
        }
    }
    get getAltura(){
        return this.altura;
    }

    get getAlturaMetros(){
        return this.altura / 100;
    }

    setAltura(altura){
        this.altura = altura;
    }

    ataca(ataque){
        const random = Math.floor(Math.random() * 100);
        // console.log(random);
        const esCritico = random > 90;
        // let critico = 'no fue critico';
        // if(esCritico){
        //     critico = 'fue critico';
        // }
        return `${this.nombre} atacó utilizando ${ataque}, ${esCritico ? 'fue critico' : 'no fue critico'}`;
    }

    esCritico(){
        const random = Math.floor(Math.random() * 100);
        const esCritico = random > 90;
        return esCritico;
    }

    atacaCiclicoCritico(){
        let ataques = [];
        let ataque = 'trueno';
        let esCritico = this.esCritico();
        // while(!esCritico){
        //     ataques.push(`${this.nombre} atacó utilizando ${ataque}, ${esCritico ? 'fue critico' : 'no fue critico'}`);
        //     esCritico = this.esCritico();
        // }
        do {
            ataques.push(`${this.nombre} atacó utilizando ${ataque}, ${esCritico ? 'fue critico' : 'no fue critico'}`);
            esCritico = this.esCritico();
            
        } while (!esCritico);
        ataques.push(`${this.nombre} atacó utilizando ${ataque}, ${esCritico ? 'fue critico' : 'no fue critico'}`);
        return ataques;
    }

    atacaCiclico(){
        const array = [
            'trueno',
            'tackle',
            'mordisco'
        ];
        
        let ataques = [];
        // for (let index = 0; index < array.length; index++) {
        //     ataques.push(this.ataca(array[index]));
        // }
        array.forEach(element => ataques.push(this.ataca(element)));

        return ataques;
    }
}

// Agregar dos propiedades con su getter y setter que se llame tipo_primario y tipo_secundario

// Generar una clase ataques con las siguientes propiedades:
    // - nombre
    // - presicion
    // - poder
    // - pp
    // - tipo
// La clase generada debera tener su constructor, sus getters y setters de cada una de las propiedades y una funcion llamada usar()
    // Funcionalidad de la funcion usar:
        // - Debe imprimir un texto que diga "se utilizo el movimiento: (nombre_movimiento), es (critico/no critico)"

// Agregar dos propiedades en la clase Pokemon: movimientos y movimientos_aprendidos

// Investigación: generar un enum de los tipos que existen en pokemon
// Investigación: generar una clase de un pokemon (el que tu quieras) y que herede las propiedades de la clase Pokemon.



const pokemon = new Pokemon('Pikachu', 40, 25);
pokemon.setAltura(38);
console.log(pokemon.altura);
pokemon.altura = 42;
const altura = pokemon.getAltura;
console.log(pokemon.getAlturaMetros);

console.log(pokemon.ataca('trueno'));
console.log(pokemon.atacaCiclico());
console.log(pokemon.atacaCiclicoCritico());