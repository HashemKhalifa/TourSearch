import PropTypes from 'prop-types';
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import style from '../../../assets/styles/star-rating.css';

const StarRatings = props => (
  <div className={style.rating_stars}>
    <ul className={style.star_rating_list}>
      {new Array(5).fill(0).map((key, idx) => (
        <li key={'rating-' + idx}>
          <FontAwesomeIcon icon={faStar} />
        </li>
      ))}
    </ul>
    {props.rating && (
      <ul className={style.star_rating_list_active}>
        {new Array(Math.round(props.rating)).fill(0).map((key, idx) => (
          <li key={'rating-active-' + idx}>
            <FontAwesomeIcon icon={faStar} />
          </li>
        ))}
      </ul>
    )}
  </div>
);
StarRatings.propTypes = {
  rating: PropTypes.string.isRequired,
}

export default StarRatings;
