import { Sizes, Products } from './product.model';

export const products: Products[] = [];

export function addProduct(data: Products) {
  products.push(data);
}

export const calcStock = (): number => {
  let total = 0;
  products.forEach((product) => {
    total += product.stock;
  });

  return total;
};
