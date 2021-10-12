import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Board from "./pages/Board";
import BoardItem from "./pages/BoardItem/"
import Message from "./pages/Message";
import Login from "./pages/Accout/Login";
import Signup from "./pages/Accout/Signup";
import Setting from "./pages/Setting";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/board" component={Board} />
        <Route exact path="/board/list/1" component={BoardItem} />
        <Route exact path="/message" component={Message} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/setting" component={Setting} />

      </Switch>
    </BrowserRouter>
  );
};

export default App;
