/* eslint-disable no-console */
const randomTime = (max) => Math.ceil(Math.random() * max);

const orders = (product, table) => {
  console.log(`### Orden: ${product} para ${table}\n`);
  return new Promise((resolve, reject) => {
    const time = randomTime(8000);
    setTimeout(() => {
      if (time < 7500) {
        resolve(`=== Pedido servido: ${product}, tiempo de preparación ${time}ms para la ${table}\n`);
      } else {
        // simulate case reject when time is long in ms
        reject(new TypeError(`Demora en la cocina (${time}ms).
        -- No se pudó cumplir el pedido: ${product} de la ${table}`));
      }
    }, time);
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
