import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from "redux/modules/photos";

// FeedPhoto 에서 오는 프롭스 확인 가능 - ownProps
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    handleHeartClick: () => {
      if (ownProps.isLiked) {
        dispatch(photoActions.unLikePhoto(ownProps.photoId));
      } else {
        dispatch(photoActions.likePhoto(ownProps.photoId));
      }
    }
  };
}

export default connect(null, mapDispatchToProps)(Container);
