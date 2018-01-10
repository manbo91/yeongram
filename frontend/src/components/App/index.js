import { connect } from 'react-redux';
import Container from './container';

const mapStateToProps = (state, ownProps) => {
  const { user, routing: { location } } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    pathname: location.pathname,
  };
};

export default connect(mapStateToProps)(Container);

/*
  -- React Design Patterns --
  Container + Presenter Pattern

  Call an API to get the latest blog posts.
  Show a 'loading' status in the meantime.
  When the call to the API is resolved, render the blog posts.

  Approach One
  without Container + Presenter Pattern

  Approach Two
  Container + Presenter Pattern

  Container
  Logic: API Requests, errors etc...

  Presenter
  Data comes from props. No logic. Only UI
*/