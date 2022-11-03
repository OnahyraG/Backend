const Contenedor = require('./Contenedor');

let cont = new Contenedor('./productos.txt');

let productOne = {
    title: 'Quake III Arena',                                                                                                                                 
    price: 9.99,                                                                                                                                     
    thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a1/Quake3Title.jpg'                                     
}

let productTwo = {  
    title: 'Grand Theft Auto: San Andreas',                                                                                                                                 
    price: 9.99,                                                                                                                                     
    thumbnail: 'https://static.wikia.nocookie.net/esgta/images/c/c2/Grand_Theft_Auto_San_Andreas.JPG/revision/latest?cb=20161127211015'                                   
}

let productThree = {  
    title: 'Persona 5 Royal',                                                                                                                                 
    price: 29.99,                                                                                                                                     
    thumbnail: 'https://www.portalgames.com.ar/wp-content/uploads/2020/04/persona-5-royal.jpg'                                   
}

const getData = async() =>{

    await cont.save(productOne);
    await cont.save(productTwo);
    await cont.save(productThree);
    // const products = await cont.getAll();
    // console.log(products);
    // const productById = await cont.getById(2);
    // console.log(productById);
    // await cont.deleteById(3);
    // await cont.deleteAll();
    // await cont.save(productThree);
}

getData();