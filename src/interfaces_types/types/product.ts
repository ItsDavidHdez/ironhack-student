interface Product {
  id: number;
  name: string;
  price: number;
}

function calculateTotal(products: Product[]): number {
  let total = 0;
  for (let product of products) {
    total += product.price;
  }

  console.log(total);
  return total;
}
