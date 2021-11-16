import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";


import Main from "./pages/Main";
import Board from "./pages/Board";
import BoardItem from "./pages/BoardItem/"
import Message from "./pages/Message";
import Login from "./pages/Accout/Login";
import Signup from "./pages/Accout/Signup";
import Setting from "./pages/Setting";
import axios from "axios";

const App = () => {


  const [isLogin, setIsLogin] = useState(true);
  // useEffect(() => {
  //   const fetchLogin = async () => {
  //     const result = await axios("/api/user");

  //     if (result.data.success) {
  //       setIsLogin(true);
  //     } else {
  //       setIsLogin(false);
  //     }
  //   };
  //   fetchLogin();
  // }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

        {/* {isLogin ? (
          <Switch>ç
            </Switch>
        ) : (
          <Redirect to="/login" />
        )} */}
        <Route exact path="/" component={Main} />
        <Route exact path="/board" component={Board} />
        <Route exact path="/board/list/:category" component={BoardItem} />
        <Route exact path="/message" component={Message} />
        <Route exact path="/setting" component={Setting} />

      </Switch>
    </BrowserRouter>
  );
};
  
export default App;
