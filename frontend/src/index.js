import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GlobalContextProvider } from "./contexts/globalContext/GlobalContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalContextProvider>
            <App />
        </GlobalContextProvider>
        <ToastContainer
            position="bottom-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            limit={3}
        />
    </React.StrictMode>
);
