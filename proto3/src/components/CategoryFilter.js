import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div>
      <h2>카테고리</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <input
              type="checkbox"
              id={category}
              value={category}
              checked={selectedCategory === category}
              onChange={() => onSelectCategory(category)}
            />
            <label htmlFor={category}>{category}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
