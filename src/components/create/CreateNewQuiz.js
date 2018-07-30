
import React, {Component} from 'react';
import QuizListItem from './QuizListItem';
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions/";



class CreateNewQuiz extends Component{

  state = {quizData: '', showUpdateLabel:false};


  handleInputChange = event => {
    this.setState({quizData:event.target.value});
  };

  handleFormSubmit = event => {
    const {quizData} = this.state;
    const {addQuiz} = this.props;
    event.preventDefault();
    addQuiz(quizData);
    this.setState({quizData: ''});
  }

  renderAddForm = () => {
    const {quizData} = this.state;

    return(
      <div id="todo-add-form" className="col s10 offset-s1">
        <form onSubmit={this.handleFormSubmit}>
          <div className="input-field">
            <input
              value={quizData}
              onChange={this.handleInputChange}
              id="quizNext"
              type="text"
            />
            <label htmlFor="quizNext">Create a new Quiz</label>
          </div>
        </form>
      </div>
    )
  }

  renderQuizzes(){

      const {data} = this.props;
      const quizzes = _.map(data, (value, key) => {
        return <QuizListItem key={key} quizId={data[key].id} quiz={value.data()} />;
      });
      if(!_.isEmpty(quizzes)){
        return quizzes;
      }
      return(
        <div className="col s10 offset-1 center-align">
          <img
            alt="Nothing was found"
            id="nothing-was-found"
            src=""
          />
          <h4>You have completed all the tasks</h4>
          <p>Start by clicking the Add button in the bottom of the screen</p>
        </div>
      )

  }

  componentWillMount() {
    this.props.fetchQuizzes();
  }


  render(){
    return(
      <div className="to-do-list-container">
        <div className="row">
          {this.state.showUpdateLabel ? '<div>Quiz has been updated' : null}
          {this.renderAddForm()}
          {this.renderQuizzes()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};




export default connect(mapStateToProps, actions)(CreateNewQuiz);
