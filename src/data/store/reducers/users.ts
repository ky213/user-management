import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { api } from "src/data/api";
import type { IRootState } from "..";
import { IUser } from "src/data/types";

type IUsersState = {
  list: IUser[];
};

const slice = createSlice({
  name: "users",
  initialState: { list: [] } as IUsersState,
  reducers: {
    createUser: (state, { payload }: PayloadAction<IUser>) => {
      state.list.unshift(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.getUsers.matchFulfilled, (state, { payload }) => {
      state.list = payload.results;
    });
  },
});

export default slice.reducer;

export const { createUser } = slice.actions;
