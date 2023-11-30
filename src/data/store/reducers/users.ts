import { createSlice } from "@reduxjs/toolkit";

import { api } from "src/data/api";
import type { IRootState } from "..";
import { IUser } from "src/data/types";

type IUsersState = {
  list: IUser[];
};

const slice = createSlice({
  name: "photos",
  initialState: { list: [] } as IUsersState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.getUsers.matchFulfilled, (state, { payload }) => {
      state.list = payload.results;
    });
  },
});

export default slice.reducer;

export const selectUsersList = (state: IRootState) => state.users.list;
