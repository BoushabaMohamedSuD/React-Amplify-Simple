import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SignUpHandler } from './components/SingnUpHandler';
import { SignInHandler } from './components/SignInHandler';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
function App() {
  return (
    <div className="App">
      <SignUpHandler></SignUpHandler>
      <SignInHandler></SignInHandler>
    </div>
  );
}

export default App;
