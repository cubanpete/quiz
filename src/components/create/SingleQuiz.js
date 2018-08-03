
import React, {Component} from 'react';
import QuizListItem from './QuizListItem';
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions/";



class SingleQuiz extends Component{
  constructor(super){
    console.log(this.props);
  }

  render(){
    return(
      <div className="to-do-list-container">
        Single Quiz
      </div>
    );
  }
}

const mapStateToProps = ({ data, auth }) => {
  return {
    data:data.quizzes,
    showUpdateLabel:data.showUpdateLabel,
    userID:auth.userID
  };
};




export default connect(mapStateToProps)(SingleQuiz);
