// let myNumber: number;
let myString: string;

let myNull: null = null;
let myUndifined: undefined = undefined;

let myNumber: number | null = null;

function hi(name: string | null) {
  let hello: string = 'Hello!';

  if (name) {
    hello += ' ' + name;
  } else {
    hello += ' What is your name?';
  }

  console.log(hello);
}

function hiV2(name: string | null) {
  let hello: string = 'Hello!';

  hello += name?.toLocaleLowerCase() || ' nobody';

  console.log(hello);
}

hi('David');
hi(null);
