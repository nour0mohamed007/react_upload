import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

function FilterIcon({ toggleSidebar }) {
  return (
    <div className='filter-icon' onClick={toggleSidebar}>
      <FontAwesomeIcon icon={faFilter} size="2x" />
    </div>
  );
}

export default FilterIcon;
