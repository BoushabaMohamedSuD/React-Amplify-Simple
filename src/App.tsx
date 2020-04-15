import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SignUpHandler } from './components/SingnInHandler';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
function App() {
  return (
    <div className="App">
      <SignUpHandler></SignUpHandler>
    </div>
  );
}

export default App;
