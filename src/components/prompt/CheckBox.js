import React, { useState } from 'react';
import './CheckBox.css';

const CheckBox = ({ label, onChange, checkedColor }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    onChange();
  };

  return (
    <label className="checkbox-container">
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={handleCheckboxChange} 
      />
      <span 
        className={`checkmark ${checked ? 'checked' : ''}`} 
        style={{ backgroundColor: checked ? checkedColor : '#b6b6b6' }}
      ></span>
      <span 
        className="checkbox-label" 
        dangerouslySetInnerHTML={{ __html: label }}
      ></span>
    </label>
  );
};

export default CheckBox;