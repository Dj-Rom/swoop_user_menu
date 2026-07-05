import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./i18n/index";
import App from "./App";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter basename="/swoop_user_menu">
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
