import ReactDom from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";

ReactDom.render(
  <BrowserRouter>
    <Route path="/home" component={Home}></Route>
  </BrowserRouter>,
  document.getElementById("root")
);
