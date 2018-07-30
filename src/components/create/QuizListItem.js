import React, {Component} from 'react';
import { connect } from "react-redux";
import {deleteQuiz, updateQuiz} from '../../actions';

class QuizListItem extends Component{

  handleRemoveClick = quizId => {
    const {deleteQuiz} = this.props;
    deleteQuiz(quizId);
  };

  handleUpdateQuiz = quizId => {
    const {updateQuiz} = this.props;
    updateQuiz(quizId, 'Profets Of Rage')
  };

  render(){

    const {quizId, quiz} = this.props;
    return(
      <div key="quizName" className="col s10 offset-s1 to-do-list-item">
        <h4>
          {quiz.name}{" "}
            <span
              onClick={() => this.handleRemoveClick(quizId)}
              className="complete-todo-item waves-effect waves-light teal lighten-5 teal-text text-darken-4 btn"
            >
                <i className="large material-icons">delete</i>
            </span>{" "}
            <span
              onClick={() => this.handleUpdateQuiz(quizId)}
              className="complete-todo-item waves-effect waves-light teal lighten-5 teal-text text-darken-4 btn"
            >
                <i className="large material-icons">update</i>
            </span>
        </h4>
      </div>
    )
  }
}

export default connect(null, { deleteQuiz, updateQuiz })(QuizListItem);
