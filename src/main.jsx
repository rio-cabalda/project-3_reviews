import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppAlternative from './App-alternative-approach.jsx';

ReactDOM.createRoot(document
    .getElementById('root'))
    .render(<>
    {/* <App />         {/*-----This is the typical approach---- */}
     < AppAlternative />  {/*-----Less code using MODULAR approach---- */}
    </>);
