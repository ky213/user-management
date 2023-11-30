import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { USERS_API_URL } from "src/config/constants";
import { IAPIResult, IUser } from "src/data/types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: USERS_API_URL }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query<IAPIResult, null>({
      query: () => ``,
    }),
  }),
});

export const { useGetUsersQuery } = api;
