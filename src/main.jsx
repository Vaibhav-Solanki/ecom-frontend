import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import {onMessage} from 'firebase/messaging'
import { App } from 'antd';

import { client as graphQlClient } from "./services/graphql.js";
import { messaging } from "./services/firebase.config.js";
import router from "./routes/index.jsx";

import "./index.css";
import "./services/firebase.config.js";

function AppBody(){
    const {notification}= App.useApp();

    onMessage(messaging, (payload) => {
        let body = {
            message: payload.notification.title,
            description: payload.notification.body,
            placement: 'bottomRight',
            showProgress: true,
            pauseOnHover: true,
        };

        if(payload.data && payload.data.forground) {
            body = {... body, ...payload.data.forground}
        }

        notification.info(body);
    });

    return <ApolloProvider client={graphQlClient}>
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#faad14",
                    borderRadius: 2,
                    colorBgContainer: "white",
                },
            }}
        >
            <RouterProvider router={router} />
        </ConfigProvider>
    </ApolloProvider>
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App><AppBody/></App>);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
        .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
            console.error('Service Worker registration failed:', error);
        });
}
