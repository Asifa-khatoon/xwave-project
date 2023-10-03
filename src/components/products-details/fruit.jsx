
// import React, { useState } from 'react';


// const ProductFilter = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const products = [
//     { name: 'Oranges', category: 'fruit', image: '../../images/cat-3.jpg' },
//     { name: 'Steak', category: 'meat', image: 'steak.jpg' },
//     { name: 'Broccoli', category: 'vegetable', image: 'broccoli.jpg' },
//     { name: 'Orange Juice', category: 'juice', image: 'orange-juice.jpg' },
//     { name: 'Pizza', category: 'fastfood', image: 'pizza.jpg' },
//     { name: 'Apples', category: 'fruit', image: 'apples.jpg' },
//     { name: 'Bananas', category: 'fruit', image: 'bananas.jpg' },
//     { name: 'Apple Juice', category: 'juice', image: 'apple-juice.jpg' },
//     { name: 'Grapes', category: 'fruit', image: 'grapes.jpg' },
//     { name: 'Carrots', category: 'vegetable', image: 'carrots.jpg' },
//   ];

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div>
//       <ul>
//         <li onClick={() => handleCategoryClick('fruit')}>Fruit</li>
//         <li onClick={() => handleCategoryClick('meat')}>Meat</li>
//         <li onClick={() => handleCategoryClick('vegetable')}>Vegetable</li>
//         <li onClick={() => handleCategoryClick('juice')}>Juice</li>
//         <li onClick={() => handleCategoryClick('fastfood')}>Fast Food</li>
//       </ul>
//       <div>
//         {products.map((product, index) => {
//           if (selectedCategory === null || product.category === selectedCategory) {
//             return (
//               <div key={index}>
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   width="100"
//                   height="100"
//                 />
//                 <p>{product.name}</p>
//               </div>
//             );
//           }
//           return null;
//         })}
//       </div>
//     </div>
//   );
// };

// export default ProductFilter;
