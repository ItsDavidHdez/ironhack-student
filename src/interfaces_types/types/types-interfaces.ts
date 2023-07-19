type Person = {
  name: string;
  age: number;
  email: string;
};

const person: Person = {
  name: 'David',
  age: 23,
  email: 'david@example.com',
};

interface Book {
  title: string;
  author: string;
  pages: number;
}

const book: Book[] = [
  {
    title: 'El negociador',
    author: 'Arturo',
    pages: 200,
  },
  {
    title: 'La isla encantada',
    author: 'Julio',
    pages: 450,
  },
  {
    title: 'La revolución cubana',
    author: 'Alonso',
    pages: 600,
  },
];

function displayBookInfo(books: Book[]) {
  for (let book of books) {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Pages: ${book.pages}`);
  }
}

displayBookInfo(book);
