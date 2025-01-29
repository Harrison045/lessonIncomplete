import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

const UserSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = [...state.user, action.payload];
    },
    editUser: (state, action) => {
      state.user = state.user.map((user) => {
        if (user.id === action.payload.id) return action.payload.newData;
        return user;
      });
    },
    deleteUser: (state, action) => {},
  },
});

export const { addUser,editUser } = UserSlice.actions;

export default UserSlice.reducer;
