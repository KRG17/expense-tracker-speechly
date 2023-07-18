import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import './index.css';
import App from './App';
import { Provider } from './context/context';


ReactDOM.render(
    <SpeechProvider appId='21b054c5-564f-483a-b183-6b961931a2b5' language="en-US">
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);