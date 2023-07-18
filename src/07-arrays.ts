(() => {
  let prices = [1, 2, 3, 4, 5, 6, 7, 87, 8];
  prices.push(10);

  console.log(prices);

  let products: (number | string | boolean | Object)[] = [
    1,
    23,
    4,
    54,
    6,
    7,
    87,
    'hola',
    'david',
    'jeje',
    true,
    false,
  ];

  products.push({
    hola: 'Holaaaa',
  });
  products.push([]);
  products.push('Aprendiendo TypesScript');
  products.push(69);

  console.log(products);

  let numbers = [1, 2, 3, 4, 5];
  let numbersForTwo = numbers.map((number) => number * 2);

  console.log(numbersForTwo);
})();
