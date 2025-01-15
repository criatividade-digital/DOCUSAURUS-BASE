import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'; 
import CardSwiper from '@site/src/components/slides';

// You might want to add PropTypes for better type checking
const CueCards = ({ cardsData, title = "Cartões de apoio." }) => {
  return (
    <details>
      <summary>
         <i>{title}</i> <FontAwesomeIcon icon={faPersonChalkboard} /><br /><br />
      </summary>
      <CardSwiper cards={cardsData} />
    </details>
  );
};

// Add PropTypes for type checking (optional but recommended)
CueCards.propTypes = {
  cardsData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};

export default CueCards;