import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";

import { api } from "src/data/api";
import type { IRootState } from "..";
import { IUser } from "src/data/types";

type IUsersState = {
  list: IUser[];
  loading: boolean;
  error: string | null;
  success: boolean;
};

export const createUser = createAsyncThunk<IUser, IUser>("users/createUser", async (newUser: IUser) => {
  return new Promise<IUser>((resolve, reject) => {
    try {
      const t = setTimeout(() => resolve(newUser), 3000);
    } catch (error) {
      reject(error);
    }
  });
});

const slice = createSlice({
  name: "users",
  initialState: { list: [], loading: false, success: false, error: null } as IUsersState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.list.unshift(action.payload);
      enqueueSnackbar("User created", { variant: "success" });
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.error.message || "unknown error.";
      enqueueSnackbar(action.error.message, { variant: "error" });
    });
    builder.addMatcher(api.endpoints.getUsers.matchFulfilled, (state, { payload }) => {
      state.list.push(...payload.results);
    });
    builder.addMatcher(api.endpoints.getUsers.matchRejected, (state, { payload, error }) => {
      enqueueSnackbar("Error: " + error.message, { variant: "error" });
    });
  },
});

export default slice.reducer;
