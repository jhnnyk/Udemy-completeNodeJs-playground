// ------------------------------
// Object property shorthand

const name = 'Andrew';
const userAge = 27;

const user = {
  name, // shorthand syntax when property name and variable name are the same
  age: userAge,
  location: 'Philadelphia'
};

console.log(user);

// ------------------------------
// Object destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
};

// instead of
// const label = product.label;
// const stock = product.stock;

// const { label: productLabel, stock, rating = 5 } = product; // 'rating = 5' is the default
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction('order', product);