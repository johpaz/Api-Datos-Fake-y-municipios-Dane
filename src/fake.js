  const fs = require('fs');
  const faker = require('faker/locale/es_MX');

  const generateProfesionales = async () => {
    const profesionales = [];

    const Ocupations = [
      { id: 1, name: "Ingenieria software", description: "Desarrollador de software especializado en ingeniería" },
      { id: 2, name: "Diseñador gráfico", description: "Creador de diseños gráficos para diversos proyectos" },
      { id: 3, name: "Arquitecto", description: "Diseñador y creador de estructuras arquitectónicas" },
      { id: 4, name: "Psicólogo", description: "Profesional de la salud mental que ofrece terapia y consejería" },
      { id: 5, name: "Programador", description: "Desarrollador de software experto en programación" },
      { id: 6, name: "Marketing digital", description: "Experto en estrategias de marketing en línea" },
      { id: 7, name: "Contador", description: "Especialista en contabilidad y gestión financiera" },
      { id: 8, name: "Redactor", description: "Escritor de contenido creativo y persuasivo" },
      { id: 9, name: "Traductor", description: "Profesional que brinda servicios de traducción de idiomas" },
      { id: 10, name: "Ingeniero civil", description: "Diseñador y constructor de estructuras civiles" },
      { id: 11, name: "Abogado", description: "Experto en asesoramiento legal y representación legal" }
    ];
    
    const Category = [
      { id: 1, name: "Ingenieria" },
      { id: 2, name: "Salud" },
      { id: 3, name: "Diseño gráfico" },
      { id: 4, name: "Desarrollo web" }
    ];

    for (let i = 0; i < 100; i++) {
      const randomOcupations = faker.random.arrayElements(Ocupations, faker.random.number({ min: 1, max: 3 }));
      const randomCategories = faker.random.arrayElements(Category, faker.random.number({ min: 1, max: 3 }));

      const profesional = {
        id: faker.random.number({ min: 10000000, max: 99999999 }).toString(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        image: faker.image.imageUrl(),
        genre: faker.random.arrayElement(['male', 'female']),
        years_exp: faker.datatype.number({ min: 1, max: 5 }).toString(),
        profesion: randomOcupations.map(ocupation => ({ id: ocupation.id, name: ocupation.name, description: ocupation.description })),
        categoria: randomCategories.map(category => ({ id: category.id, name: category.name }))
      };

      profesionales.push(profesional);
    }

    const jsonData = JSON.stringify({ profesionales: profesionales }, null, 2);
    fs.writeFile('profesionales.json', jsonData, (error) => {
      if (error) {
        console.error('Error al escribir el archivo JSON:', error);
      } else {
        console.log('Archivo JSON generado exitosamente: profesionales.json');
      }
    });
  };

  generateProfesionales();

  
  const generatePosts = () => {
    const posts = [];
  
    for (let i = 0; i < 10; i++) {
      const post = {
        id: faker.random.uuid(),
        title: faker.lorem.sentence(),
        image: faker.image.imageUrl(),
        content: faker.lorem.paragraphs()
      };
  
      posts.push(post);
    }
  
    return posts;
  };
  
  const posts = generatePosts();
  const jsonData = JSON.stringify({ postclient: posts }, null, 2);
  
  fs.writeFile('posts.json', jsonData, (error) => {
    if (error) {
      console.error('Error al escribir el archivo JSON:', error);
    } else {
      console.log('Archivo JSON generado exitosamente: posts.json');
    }
  });