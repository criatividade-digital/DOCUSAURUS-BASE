import React, { useState } from 'react';
import './Combo.css';

const ComboBox = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="combo-box">
      <span onClick={() => setIsOpen(!isOpen)} className="combo-box-toggle">
        ▼
      </span>
      {isOpen && (
        <ul className="combo-box-options">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)} className="combo-box-option">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComboBox;