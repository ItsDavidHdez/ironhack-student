const login = (obj: { email: string; password: string }): void => {
  const { email, password } = obj;
  console.log(email, password);
};

login({
  email: 'david@example.com',
  password: '123456',
});

const products: any[] = [];
type Size = 'S' | 'M' | 'L' | 'XL';

// function addProduct(data: {
//   title: string;
//   createdAt?: Date;
//   stock: number;
//   size?: Size;
// }) {
//   products.push(data);
// }

// addProduct({
//   title: 'Xbox',
//   createdAt: new Date(1993, 1, 1),
//   stock: 100,
// });

console.log(products);
