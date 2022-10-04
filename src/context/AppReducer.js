export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        usersList: [...state.usersList, action.payload],
      };
    case "UPDATE_USER": {
      const updatedUser = action.payload;

      const updatedUsersList = state.usersList.map((user) => {
        if (user.id === updatedUser.id) {
          updatedUser.auth = user.auth;
          return updatedUser;
        }
        return user;
      });
      return {
        ...state,
        usersList: updatedUsersList,
      };
    }
    case "DELETE_USER":
      return {
        ...state,
        usersList: state.usersList.filter((user) => user.id !== action.payload),
      };
    case "TOGGLE_AUTH":
      const updatedUsersList = state.usersList.map((user) => {
        if (user.id === action.payload) {
          return { ...user, auth: !user.auth };
        }
        return user;
      });
      return {
        ...state,
        usersList: updatedUsersList,
      };
    default:
      return state;
  }
}