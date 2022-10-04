import { createContext, useReducer } from "react";
import appReducer from "./AppReducer";

const isLogin = localStorage.getItem("isLogin");

const initialState = {
  usersList: [
    {
      id: "1",
      name: "William Johanson",
      email: "admin@example.com",
      auth: isLogin ? true : false,
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addUser(user) {
    dispatch({
      type: "ADD_USER",
      payload: { ...user, id: state.usersList.length + 1, auth: false },
    });
  }

  function updateUser(updatedUser) {
    dispatch({
      type: "UPDATE_USER",
      payload: updatedUser,
    });
  }

  function deleteUser(id) {
    dispatch({
      type: "DELETE_USER",
      payload: id,
    });
  }

  function toggleAuth(id) {
    dispatch({
      type: "TOGGLE_AUTH",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        usersList: state.usersList,
        addUser,
        updateUser,
        deleteUser,
        toggleAuth,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
