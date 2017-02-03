import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./homepage/HomePage";
import PersonPage from "./personPage/Personpage";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Blog from "./blog/Blog";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Blog}>
            <IndexRoute component={HomePage}/>
            <Route path='personpage' component={PersonPage}/>
        </Route>
    </Router>
    , document.getElementById("blog")
);