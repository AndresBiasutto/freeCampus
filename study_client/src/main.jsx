import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { Auth0Provider } from "@auth0/auth0-react";

// Acceso a las variables de entorno
const domain = import.meta.env.VITE_APP_AUTH_DOMAIN;
const clientId = import.meta.env.VITE_APP_AUTH_CLIENT_ID;
// const redirectUri= import.meta.env.VITE_APP_AUTH_REDIRECT_URI

ReactDOM.createRoot(document.getElementById("root")).render(
<Auth0Provider
  domain={domain}
  clientId={clientId}
  authorizationParams={{
    redirect_uri: window.location.origin,
    // scope: "openid profile email",
  }}
>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
</Auth0Provider>
);
