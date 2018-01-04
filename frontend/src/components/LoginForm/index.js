import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    facebookLogin: (acess_token) => {
      dispatch(userActions.facebookLogin(acess_token));
    }
  };
}

export default connect(null, mapDispatchToProps)(Container);