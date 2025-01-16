import React, { useState } from 'react';
import ComboBox from './Combo';

const TextWithComboBoxes = () => {
  const [text, setText] = useState('<p>This is a sample text with a [combo1] and another [combo2].</p>');
  const [selectedOptions, setSelectedOptions] = useState({ combo1: '', combo2: '' });

  const handleSelect = (comboId, option) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [comboId]: option,
    }));
  };

  const renderTextWithCombos = () => {
    return text.split(/(\[combo\d+\])/).map((part, index) => {
      if (part.match(/\[combo\d+\]/)) {
        const comboId = part.slice(1, -1);
        return (
          <span key={index} className="combo-container">
            <ComboBox
              options={['Option 1', 'Option 2', 'Option 3']}
              onSelect={(option) => handleSelect(comboId, option)}
            />
            {selectedOptions[comboId] && ` (${selectedOptions[comboId]})`}
          </span>
        );
      }
      return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />;
    });
  };

  return (
    <div>
      <p style={{ display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center' }}>
        {renderTextWithCombos()}
      </p>
    </div>
  );
};

export default TextWithComboBoxes;