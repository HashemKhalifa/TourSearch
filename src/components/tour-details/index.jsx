import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CAPcase } from '../../helpers.js';
import style from '../../assets/styles/tour-details.css';
import { setSearchString } from '../../store/actions';
import TourItem from './tour-item'

class TourDetails extends Component {
  componentDidMount() {
    if (this.props.searchResult.length === 0) {
      this.props.setSearchString(this.props.match.params.query);
    }
  }

  render() {
    const { searchResult } = this.props;
    return (
      <div className={style['tour-details']} data-test="tour-details">
        {this.props.searchResult.length ? (
          searchResult.map(item => (
            <TourItem key={CAPcase(item.title)} {...item} />
          ))
        ) : (
          <p className={style.error} data-test="search-empty">
            Sorry no result matched your search <Link to="/">Search again</Link>
          </p>
        )}
      </div>
    );
  }
}

TourDetails.propTypes = {
  title: PropTypes.string,
};

const mapStateToProps = state => ({
  currentItem: state.currentItem,
  searchResult: state.searchResult,
  currentIndex: state.currentIndex,
});

const mapDispatchToProps = dispatch => ({
  setSearchString: payload => dispatch(setSearchString(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TourDetails);
