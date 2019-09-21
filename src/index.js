const randomTime = (max) => Math.ceil(Math.random() * max);

const orders = (product, table) => {
  console.log(`### Orden: ${product} para ${table}`);
  return new Promise((resolve, reject) => {
    const time = randomTime(8000);
    if (time < 7000) {
      setTimeout(() => {
        resolve(`=== Pedido servido: ${product}, tiempo de preparación ${time}ms para la ${table}`);
      }, time);
    } else {
      reject(new Error(`--- No se puede cumplir el pedido: ${product} de la mesa ${table}`));
    }
  });
};

const menu = {
  hamburger: 'Combo Hamburguesa',
  hotdog: 'Combo Hot Dogs',
  pizza: 'Combo Pizza',
};

const table = ['Mesa 1', 'Mesa 2', 'Mesa 3', 'Mesa 4', 'Mesa 5'];

const waiter = () => {
  orders(menu.hamburger, table[3])
    .then((response) => { console.log(response); })
    .catch((error) => { console.warn(error); });
};


waiter();
