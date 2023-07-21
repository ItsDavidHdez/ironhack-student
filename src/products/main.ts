import { addProduct, calcStock, products } from './product.service';

const rta = 1 + '1';
addProduct({
  title: 'Xbox',
  createdAt: new Date(1993, 1, 1),
  stock: 100,
});

addProduct({
  title: 'Play Station 5',
  createdAt: new Date(1993, 1, 1),
  stock: 200,
});

const totalStock = calcStock();

console.log(products);
console.log('Stock:', totalStock);
