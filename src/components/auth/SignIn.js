import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../actions';
import PropTypes from 'prop-types';

class SignIn extends Component{
  static contextTypes = {
    router : PropTypes.object
  }

  componentWillUpdate(nextProps){
    if(nextProps.auth){
      this.context.router.history.push("/create");
    }
  }

  render(){
    return(
      <a href="# " onClick={this.props.signIn}>Sign In with Facebook</a>
    )
  }
}


function mapStateToProps({auth}){
  return { auth }
}

export default connect(mapStateToProps, {signIn})(SignIn);
