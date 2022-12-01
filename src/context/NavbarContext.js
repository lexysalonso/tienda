import {createContext, useReducer} from "react"
import navbarReducer from "./navbarReducer"
import types from "./types"

const NavbarContext =  createContext()

let initialState = {
  isOpenShoppingCard : false,
  isOpenMenuFilter: false,
  isOpenProfileUser:false
}

const NavbarProvider = ({ children })=>{
  const [state, dispatch] = useReducer(navbarReducer, initialState);

  let data = {
    ...state,
    OpenShoppingCard: () => {
      dispatch({ type: types.IS_OPEN_SHOOPING_CARD });
    },
    CloseShoppingCard: () => {
      dispatch({ type: types.IS_CLOSE_SHOOPING_CARD });
    },
    OpenMenuFilter: () => {
      dispatch({ type: types.IS_OPEN_MENU_FILTER });
    },
    CloseMenuFilter: () => {
      dispatch({ type: types.IS_CLOSE_MENU_FILTER });
    },
    OpenProfileUser: () => {
      dispatch({ type: types.IS_OPEN_PROFILE_USER });
    },
    CloseProfileUser: () => {
      dispatch({ type: types.IS_CLOSE_PROFILE_USER });
    },
  };

  return <NavbarContext.Provider value={data}>{ children }</NavbarContext.Provider>
}
export { NavbarProvider };
export default NavbarContext;