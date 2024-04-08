import React, { useState } from 'react';
import DestinationList from '../components/Place';
import CategoryFilter from '../components/CategoryFilter';

const Destination = () => {
  const destinations = [
    { name: '파리', category: '도시' },
    { name: '도쿄', category: '도시' },
    { name: '아키하바라', category: '도시' },
    { name: '경복궁', category: '관광지' },
    { name: '벚꽃축제', category: '축제' },
  ];

  const categories = ['도시', '관광지', '축제'];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredDestinations = selectedCategory
    ? destinations.filter((destination) => destination.category === selectedCategory)
    : destinations;

  return (
    <div>
      <h1>여행지</h1>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <DestinationList destinations={filteredDestinations} />
    </div>
  );
};

export default Destination;