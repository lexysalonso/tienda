import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./app/store";
let persistor = persistStore(store)

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ToastContainer } from "react-toastify";
import { I18nextProvider } from "react-i18next";
import i18next from "./i18n/i18n";


const root = ReactDOM.createRoot(document.getElementById("root"));

let persistor = persistStore(store);

root.render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ToastContainer></ToastContainer>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Provider>
  </PersistGate>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
