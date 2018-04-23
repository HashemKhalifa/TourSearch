import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { setSearchString } from '../../store/actions';
import style from '../../assets/styles/search-box.css';

class SearchBox extends Component {
  /**
   *
   * @param event
   */
  handleOnInputChange = (event) => {
    this.props.setSearchString(event.target.value);
  };

  /**
   *
   * @param e
   */
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.history.push(`/${this.props.searchString}`);
    }
  };

  render() {
    const { searchResult, searchString } = this.props;
    return (
      <div className={style.search_container}>
        <input
          data-test="search-input"
          onKeyPress={this.handleKeyPress}
          placeholder="Where you are going?"
          className={style.search_input}
          onChange={this.handleOnInputChange}
          value={searchString}
          type="text" />
        <FontAwesomeIcon className={style.search_icon} icon={faSearch} />
        <ul className={style.search_result}>
          {this.props.searchResult.slice(0, 6).map(link => (
            <li key={link.title} data-test="search-result-item">
              <Link to={'/' + searchString}>
                {link.title}
                {link.isSpecialOffer && (
                  <span className={style.discount_flag}>10% off</span>
                )}
              </Link>
            </li>
          ))}
          {searchResult.length <= 0 &&
            searchString && (
            <li className={style.error} data-test="search-empty">
                Sorry no result matched your search
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchResult: state.searchResult,
  searchString: state.searchString,
});

SearchBox.propTypes = {
  setSearchString: PropTypes.func.isRequired,
  searchString: PropTypes.string.isRequired,
  searchResult: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};
const mapDispatchToProps = dispatch => ({
  setSearchString: payload => dispatch(setSearchString(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
