export default function appReducer(state, action) {
  switch (action.type) {
    case "USER_LOGIN":
      return action.payload ;

    case "UPDATE_USER": {
      //   const updatedUser = action.payload;
      //   const updatedUsersList = state.usersList.map((user) => {
      //     if (user.id === updatedUser.id) {
      //       updatedUser.auth = user.auth;
      //       return updatedUser;
      //     }
      //     return user;
      //   });
      //   return {
      //     ...state,
      //     usersList: updatedUsersList,
      //   };
      // }
      return action.payload;
    }

    case "USER_LOGOUT":
      // return {
      //   ...state,
      //   usersList: state.usersList.filter((user) => user.id !== action.payload),
      // };
      return action.payload;

    case "TOGGLE_AUTH":
      return { ...state, auth: !state.auth };
    default:
      return state;
  }
}
