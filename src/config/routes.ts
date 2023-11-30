import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import { ErrorBoundary } from "src/components";
import { MainLayout } from "src/layouts";
import { HomePage, Dashboard, NotFound } from "src/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/home",
        Component: HomePage,
        // errorElement: <ErrorBoundary />,
      },
      {
        path: "/dashboard",
        Component: Dashboard,
        // errorElement: <ErrorBoundary />,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
