import initialState from '../initial-state';
import * as actionType from '../constants';
import { CAPcase } from '../../helpers.js';
/* eslint no-param-reassign: "error" */
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case actionType.FILTER_STRING:
    return {
      ...state,
      searchResult: payload ? state.data.filter(tour =>
        tour.title.toLowerCase().includes(payload.toLowerCase())) : [],
      searchString: payload,
    };
  case actionType.SEARCH_RESULT:
    return {
      ...state,
      searchResult: payload,
    };
  case actionType.CURRENT_ITEM: {
    const currentIndex = action.view
      ? state.data.findIndex(item => CAPcase(item.title) === payload)
      : state.searchResult.findIndex(item => CAPcase(item.title) === payload);
    return {
      ...state,
      currentItem: action.view
        ? state.data[currentIndex]
        : state.searchResult[currentIndex],
      currentIndex,
    };
  }
  case actionType.NEXT_ITEM: {
    const currentIndex =
        state.searchResult.length - 1 > state.currentIndex
          ? (state.currentIndex += 1)
          : 0;
    return {
      ...state,
      currentItem: state.searchResult[currentIndex],
      currentIndex,
    };
  }
  case actionType.PREV_ITEM: {
    const currentIndex =
        state.currentIndex > 0
          ? (state.currentIndex -= 1)
          : state.searchResult.length - 1;
    return {
      ...state,
      currentItem: state.searchResult[currentIndex],
      currentIndex,
    };
  }
  default:
    return state;
  }
};
