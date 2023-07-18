(() => {
  let userId: string | number;
  userId = 'asdjashdassahd';
  userId = 123;

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(myText.toLocaleUpperCase());
    } else {
      console.log(myText + 10);
    }
  }

  greeting('hola, soy david');
  greeting(90);
})();
