import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { USERS_API_URL } from "src/config/constants";
import { IUser } from "src/data/types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: USERS_API_URL }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query<null, IUser[]>({
      query: () => ``,
    }),
  }),
});

export const { useGetUsersQuery } = api;
