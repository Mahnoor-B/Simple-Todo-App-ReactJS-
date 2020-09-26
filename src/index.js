import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./TodoApp.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<TodoApp />, document.getElementById("root"));
serviceWorker.unregister();
