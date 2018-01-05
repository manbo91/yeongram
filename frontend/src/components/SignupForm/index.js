import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    facebookLogin: acess_token => {
      dispatch(userActions.facebookLogin(acess_token));
    },
    createAccount: (username, password, email, name) => {
      dispatch(userActions.createAccount(username, password, email, name));
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);