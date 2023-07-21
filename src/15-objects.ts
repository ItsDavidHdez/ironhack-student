const productsArray: any[] = [];
type SizeType = 'S' | 'M' | 'L' | 'XL';
type ProductType = {
  title: string;
  createdAt?: Date;
  stock: number;
  size?: SizeType;
};

// function addProduct(data: ProductType) {
//   productsArray.push(data);
// }

// addProduct({
//   title: 'Xbox',
//   createdAt: new Date(1993, 1, 1),
//   stock: 100,
// });

console.log(productsArray);
