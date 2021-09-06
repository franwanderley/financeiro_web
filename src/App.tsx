import React from 'react';
import { Home } from './pages/Home';
import { ReceitasProvider } from './providers/ReceitaContext';
import './styles/global.css';

export default function App() {
  return (
    <div className="App">
      <ReceitasProvider>
        <Home/>
      </ReceitasProvider>
    </div>
  );
}


