import React, { Component } from "react";
import PropTypes from "prop-types";
import Search from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };

  static propTypes = {
    searchByTerm: PropTypes.func.isRequired,
    userList: PropTypes.array,
    imageList: PropTypes.array
  };

  componentDidMount() {
    const { searchByTerm } = this.props;
    searchByTerm();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userList && nextProps.imageList) {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { userList, imageList } = this.props;
    return (
      <Search
        {...this.state}
        {...this.props}
        userList={userList}
        imageList={imageList}
      />
    );
  }
}

export default Container;
