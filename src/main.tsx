import React from "react";
import ReactDOM from "react-dom/client";

import { Authenticator } from '@aws-amplify/ui-react';
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
    
  <React.StrictMode>
    <h1>Rivieh Test Framework</h1>
    <Authenticator>
      <App />
    </Authenticator>
  </React.StrictMode>
);
