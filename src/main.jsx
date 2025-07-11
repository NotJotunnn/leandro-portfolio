import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./routes.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </StrictMode>
);
