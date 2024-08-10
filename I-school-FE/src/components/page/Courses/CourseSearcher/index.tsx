import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'styles/course-search-style.css';

interface CoarseSearcherProps {
  placeholder: string;
  onChange: (value: string) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CoarseSearcher: React.FC<CoarseSearcherProps> = ({ placeholder, onChange, onKeyDown, onClick }) => {
  const [value, setValue] = useState('');
  // const [value, setValue] = useState('');
  // const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick(event);
  };
  return (
    <div className="search-container">
        <input
            type="text"
            className="search-bar"
            placeholder={placeholder}
            onChange={handleChange}
            onKeyDown={onKeyDown}
        />
        <button className="search-button" onClick={handleClick}>
        ⌕
        </button>
    </div>
  );
};

CoarseSearcher.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CoarseSearcher;
