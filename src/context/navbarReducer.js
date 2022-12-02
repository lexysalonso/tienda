import types from "./types";



const useReducer = (state, action) => {
  switch (action.type) {
    case types.IS_OPEN_SHOOPING_CARD: {
      return {
        ...state,
        isOpenShoppingCard: true,
      };
    }

    case types.IS_CLOSE_SHOOPING_CARD: {
      return {
        ...state,
        isOpenShoppingCard: false,
      };
    }
    case types.IS_OPEN_MENU_FILTER: {
      return {
        ...state,
        isOpenMenuFilter: true,
      };
    }
    case types.IS_CLOSE_MENU_FILTER: {
      return {
        ...state,
        isOpenMenuFilter: false,
      };
    }
    case types.IS_OPEN_PROFILE_USER: {
      return {
        ...state,
        isOpenProfileUser: true,
      };
    }
    case types.IS_CLOSE_PROFILE_USER: {
      return {
        ...state,
        isOpenProfileUser: false,
      };
    }
    default:
      return state;
  }
};

export default useReducer;