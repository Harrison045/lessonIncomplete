import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const UserSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    editUser: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) return action.payload.newData;
        return user;
      });
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, editUser, deleteUser } = UserSlice.actions;
export default UserSlice.reducer;
