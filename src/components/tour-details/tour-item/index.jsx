import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from '../../common/star-rating';
import style from '../../../assets/styles/tour-item.css';

const TourItem = props => (
  <div className={style.tour_item} data-test="search-result-item">
    <h4>{props.title}</h4>
    {props.rating && <StarRatings rating={props.rating} />}
    <div className={style.right_column}>
      <div className={style.tour_price}>
        <span className={style.tour_currency}>{props.currency} </span>
        {props.price}{' '}
      </div>
      {props.isSpecialOffer && (
        <div className={style.special_offer}>10% off</div>
      )}
    </div>
  </div>
);

TourItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currency: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  isSpecialOffer: PropTypes.bool,
};

export default TourItem;
