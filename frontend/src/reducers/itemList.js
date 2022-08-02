import {
  ITEM_FAVORITED,
  ITEM_UNFAVORITED,
  SET_PAGE,
  APPLY_TAG_FILTER,
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  CHANGE_TAB,
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED,
  PROFILE_FAVORITES_PAGE_LOADED,
  PROFILE_FAVORITES_PAGE_UNLOADED,
  ENTER_SEARCH_TERM,
} from "../constants/actionTypes";

const reducer = (state = {}, action) => {
@@ -46,6 +47,16 @@ const reducer = (state = {}, action) => {
        tag: action.tag,
        currentPage: 0,
      };
    case ENTER_SEARCH_TERM:
      return {
        ...state,
        pager: action.pager,
        items: action.payload.items,
        itemsCount: action.payload.itemsCount,
        tab: "all",
        tag: null,
        currentPage: 0,
      };
    case HOME_PAGE_LOADED:
      return {
        ...state,
        pager: action.pager,
        tags: action.payload[0].tags,
        items: action.payload[1].items,
        itemsCount: action.payload[1].itemsCount,
        currentPage: 0,
        tab: action.tab,
      };
    case HOME_PAGE_UNLOADED:
      return {};
    case CHANGE_TAB:
      return {
        ...state,
        pager: action.pager,
        items: action.payload.items,
        itemsCount: action.payload.itemsCount,
        tab: action.tab,
        currentPage: 0,
        tag: null,
      };
    case PROFILE_PAGE_LOADED:
