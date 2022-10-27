class Usuario {
    
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros || [];
        this.mascotas = mascotas || [];
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(name) {
        this.mascotas.push(name);
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(name,autor){
        this.libros.push({nombre: name, autor: autor});
    }

    getBookNames(){
        return this.libros.map(element => element.nombre);
        //this.libros.forEach(element => console.log([element.nombre]));
    }

}

const usuario = new Usuario('Fabrizio', 'Hotkowicz', [], []);

console.log(usuario.getFullName());
usuario.addMascota('Luna');
usuario.addMascota('Mora');
usuario.addMascota('Erza');
console.log(`Cantidad de mascotas del usuario: `, usuario.countMascotas());
usuario.addBook('Berserk', 'Kentaro Miura');
usuario.addBook('Vagabond', 'Takehiko Inoue');
console.log(usuario.getBookNames());