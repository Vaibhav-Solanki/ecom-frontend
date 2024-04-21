import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import { client as graphQlClient } from "./services/graphql.js";
import router from "./routes/index.jsx";

import "./index.css";
import "./services/firebase.config.js";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <ApolloProvider client={graphQlClient}>
    <ConfigProvider>
      <RouterProvider router={router} />
    </ConfigProvider>
  </ApolloProvider>,
);
