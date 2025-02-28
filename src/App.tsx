import { useEffect, useState } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { FileUploader } from '@aws-amplify/ui-react-storage';
import { ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import React from 'react';


const client = generateClient<Schema>();

function App() {
  const { user, signOut } = useAuthenticator();
  const [status, setStatus] = useState("Idle");

  return (
    <main>
      <div className="button-container">
        <button onClick={signOut}>Sign out</button>
        <br />
        <br />
      </div>
      <div className="container">
        <div className="metadata">
          <h1>Metadata</h1>
          <h3>User: {user?.signInDetails?.loginId}</h3>
          <h3>Location:  
          <select className="select-spacing">
            <option value="" disabled> Select </option>
            <option value="LACI">LACI</option>
          </select>
          </h3>
          <h3>SKU: 
          <select className="select-spacing">
            <option value="" disabled> Select </option>
            <option value="default">default</option>
            </select>
          </h3>
          <h3>S/N: 
            <select className="select-spacing">
            <option value="" disabled> Select </option>
              <option value="default">default</option>
            </select>
          </h3>
        </div>
        <div>
          <h3> Test Equipment :
            <select className="select-spacing">
              <option value="" disabled> Select </option>
              <option value="Prometheus">Prometheus</option>
            </select>
          </h3>
          <div className="test-script-container">
            <h3> Test Script :</h3>
            <div className="file-upload">
              <FileUploader
                acceptedFileTypes={['image/*']}
                path="public/"
                maxFileCount={1}
                isResumable
              />
            </div>
          </div>
          <div className="run-test">
            <button
              className="run-button"
              onClick={() => setStatus("Running")}
            >
              Run
            </button>
            <button
              className="stop-button"
              onClick={() => setStatus("Paused")}
            >
              Pause
            </button>
          </div>
          <div className="status-bar">
            <button 
              className="reset-button" 
              onClick={() => setStatus("Idle")}
            > 
              Status: {status}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
