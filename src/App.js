import React, { Component } from "react";
import requireAuth from "./components/auth/requireAuth";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "./actions";
import Navigation from './components/Navigation';
import Frontpage from './components/Frontpage';
import SingleQuiz from './components/create/SingleQuiz';
import CreateNewQuiz from './components/create/CreateNewQuiz';


class App extends Component {

  componentWillMount(){
    this.props.fetchUser();
  }

  render() {
    return(
      <BrowserRouter>
        <div>
          <Navigation />
          <Route exact path="/" component={Frontpage} />
          <Route path="/create" component={requireAuth(CreateNewQuiz)} />
          <Route path="/quiz/:id" component={requireAuth(SingleQuiz)} />
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(null, {fetchUser})(App);
