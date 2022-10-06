import { createContext, useReducer } from "react";
import appReducer from "./AppReducer";

const isLogin = localStorage.getItem("isLogin");

const initialState = 
    {
      id: isLogin ? "1" : null,
      name: isLogin ? "William Johanson" : null,
      email: isLogin ? "email@example.com" : null,
      auth: isLogin ? true : false,
    };

export const AuthContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function userLogin() {
    dispatch({
      type: "USER_LOGIN",
      payload: { id: 1, name: "William Johanson", email: "email@example.com", auth: true },
    });
  }

  function userLogout() {
    dispatch({
      type: "USER_LOGOUT",
      payload: { id: null, name: null, email: null, auth: false },
    });
  }

  function deleteUser(user) {
    dispatch({
      type: "DELETE_USER",
      payload: user.id,
    });
  }

  function toggleAuth(user) {
    dispatch({
      type: "TOGGLE_AUTH",
      payload: user.id,
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user: state,
        userLogin,
        userLogout,
        deleteUser,
        toggleAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
