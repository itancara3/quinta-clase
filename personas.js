const tiempoPromesa = 500;
const personas = [];

function findAll() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(personas);
    }, tiempoPromesa);
  })
}

function findAndCountAll() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        total: personas.length,
        rows: personas
      })
    }, tiempoPromesa);
  })
}

function findById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resgistroEncontrado = personas.find(x => x.id === id);
      if (!resgistroEncontrado) {
        reject('Registro no encontrado');
      } else {
        resolve(resgistroEncontrado);
      }
    }, tiempoPromesa);
  });
}

function create(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.id = personas.length + 1;
      personas.push(data);
      resolve(data);
    }, tiempoPromesa);
  });
}


function update(id, data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const indexRegistro = personas.findIndex(x => x.id === id);
      if (indexRegistro < 0) {
        reject('el registro no existe.')
      } else {
        data.id = id;
        personas[indexRegistro] = data;
        resolve(data);
      }
    }, tiempoPromesa);
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const indexRegistro = personas.findIndex(x => x.id === id);
      if (indexRegistro < 0) {
        reject('el registro no existe.')
      } else {
        personas.splice(indexRegistro);
        resolve(true);
      }
    }, tiempoPromesa);
  });
}

module.exports = {
  findAll,
  findAndCountAll,
  findById,
  create,
  update,
  remove
}