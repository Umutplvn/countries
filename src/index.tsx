import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

root.render(<App />);
