import React from 'react';

function SelectComponent({ label, options, value, onChange }) {
  return (
    <div>
      <h2>{label} 선택</h2>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">{label}를 선택하세요</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectComponent;
