const fs = require('fs');

// con esta funcionalidad he creado el archivo prueba.txt y le he agregado un texto cualquiera 

// fs.writeFile('prueba.txt', 'cualquiercosajaja', (error)=>{
//     if (error){
//         console.log("Error: ${error}");
//     }
// });

// ahora voy a usar readfile para leer el archivo anteriorment

fs.readFile('prueba.txt', 'utf-8', (error, data) =>{
    if (!error){
        console.log(data);
    }else{
        console.log('Error: ${error}');
    }
});