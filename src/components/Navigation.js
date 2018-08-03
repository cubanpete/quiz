import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {signOut} from '../actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as routes from '../constants/routes/routes';
import SignIn from "./auth/SignIn";


class Navigation extends Component{
  static contextTypes = {
    router : PropTypes.object
  }

  componentWillUpdate(nextProps){
    if(!nextProps.auth){
      this.context.router.history.push("/");
    }
  }

  navigationWithAuth(){
    return(
      <nav>
        <Link to={routes.CREATE_NEW_QUIZ}>Create</Link> {" "}
        <a href="# " onClick={this.props.signOut}>Sign out</a> {" "}
        <img src={this.props.auth.userPhoto} alt="" />{" "}
        <span>{this.props.auth.userName}</span>
      </nav>
    )
  }


  navigationWithoutAuth(){
    return(
      <nav>
        <SignIn />
      </nav>
    )
  }


  render(){
    return(
      <div>
        {this.props.auth
         ? this.navigationWithAuth()
         : this.navigationWithoutAuth()
        }
      </div>
    )
  }
}



function mapStateToProps({auth}){
  return { auth }
}

export default connect(mapStateToProps, {signOut})(Navigation);
