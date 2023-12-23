// FavoriteButton.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as outlineHeart } from '@fortawesome/free-regular-svg-icons';

const FavoriteButton = ({ isFavorited, onFavoriteToggle }) => {
  return (
    <FontAwesomeIcon
      className={isFavorited ? "unfave-heart" : "fave-heart"}
      icon={isFavorited ? solidHeart : outlineHeart}
      onClick={onFavoriteToggle}
    />
  );
};

export default FavoriteButton;
