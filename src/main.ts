(() => {
  const name: string = 'David';
  const age: number = 23;

  function printName(name: string) {
    console.log('My name is', name);
  }

  function printAge(age: number) {
    console.log('My age is', age);
  }

  printName(name);
  printAge(age);
})();
