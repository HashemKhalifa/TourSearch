import * as actionType from '../constants';

/**
 *
 * @param payload
 * @returns {{type: string, payload: *}}
 */
export const setSearchString = payload => ({
  type: actionType.FILTER_STRING,
  payload,
});

/**
 *
 * @param payload
 * @returns {{type: string, payload: *}}
 */
export const setSearchResult = payload => ({
  type: actionType.SEARCH_RESULT,
  payload,
});

/**
 *
 * @param payload
 * @param view
 * @returns {{type: string, payload: *, view: *}}
 */
export const setCurrentItem = (payload, view) => ({
  type: actionType.CURRENT_ITEM,
  payload,
  view,
});

/**
 *
 * @param payload
 * @returns {{type: string, payload: *}}
 */
export const nextItem = payload => ({
  type: actionType.NEXT_ITEM,
  payload,
});

/**
 *
 * @param payload
 * @returns {{type: string, payload: *}}
 */
export const prevItem = payload => ({
  type: actionType.PREV_ITEM,
  payload,
});

