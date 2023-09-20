import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reducer, {initialState} from './MyContexts/reducer.js';
import { StateProvider } from "./MyContexts/StateProvider.js";

// const root=ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App/>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

serviceWorkerRegistration.register();
