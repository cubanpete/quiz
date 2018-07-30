import React, { Component } from "react";
import QuizList from './components/create/CreateNewQuiz'

class App extends Component {
  render() {
    return(
      <div className="container">
        <QuizList />
      </div>
    )
  }
}

export default App;
