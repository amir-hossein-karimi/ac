import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Replace with your actual API base URL.
// Use Vite's import.meta.env for environment variables in the browser.
const API_BASE_URL =
  // Vite convention: prefix public env vars with VITE_
  (import.meta as any).env?.VITE_API_URL ?? "http://localhost:3000/api";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // Add auth token to headers if available
      const token = (getState() as any).auth?.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User", "Profile", "Settings"],
  endpoints: () => ({}),
});
