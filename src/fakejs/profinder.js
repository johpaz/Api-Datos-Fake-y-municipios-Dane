const fs = require('fs');

const profesionalesData = require('./profesionales.json');
const postData = require('./posts.json');

const combinedData = {
  profesionales: profesionalesData,
  post: postData
};

const jsonData = JSON.stringify({data:combinedData}, null, 2);

fs.writeFile('profinder.json', jsonData, (error) => {
  if (error) {
    console.error('Error al escribir el archivo JSON:', error);
  } else {
    console.log('Archivo JSON generado exitosamente: profinder.json');
  }
});
