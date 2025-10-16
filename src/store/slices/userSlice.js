import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "",
    name: "",
    localId: "",
    profilePicture: ""
  },
  reducers: {
    setUserEmail: (state, action) => {
      state.user = action.payload.email;
      state.name = action.payload.password;
    },
    setLocalId: (state, action) => {
        state.localId = action.payload;
    },
    setProfilePicture: (state, action) => {
        state.profilePicture = action.payload;
    },
    clearUser: (state,action) => {
        state.user = "";
        state.name = "";
        state.localId = "";
        state.profilePicture = "";
    }
  },
});

export const { setUserEmail,setLocalId,setProfilePicture,clearUser } = userSlice.actions;
export default userSlice.reducer;
