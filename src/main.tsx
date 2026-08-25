import React from 'react';
import {createRoot} from 'react-dom/client';
import {App} from './App';
import './styles.css';
import './hero-fix.css';
import './quiz-conversion.css';
import './review-proof.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
