// products.js

import rose from "../assets/images/rose.jpg";
import basil from "../assets/images/basil.jpg";
import avocado from "../assets/images/avocado.jpg";
import mint from "../assets/images/mint.jpg";

const products = [
  {
    id: 1,
    name: "Premium Roses",
    category: "Flowers",
    price: 1200,
    image: rose,
  },

  {
    id: 2,
    name: "Fresh Basil",
    category: "Herbs",
    price: 600,
    image: basil,
  },

  {
    id: 3,
    name: "Organic Avocados",
    category: "Fruits",
    price: 850,
    image: avocado,
  },

  {
    id: 4,
    name: "Mint Leaves",
    category: "Herbs",
    price: 500,
    image: mint,
  },
];

export default products;