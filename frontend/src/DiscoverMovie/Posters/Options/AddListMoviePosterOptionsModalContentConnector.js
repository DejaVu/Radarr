import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { setListMovieOption, setListMoviePosterOption } from 'Store/Actions/discoverMovieActions';
import AddListMoviePosterOptionsModalContent from './AddListMoviePosterOptionsModalContent';

function createMapStateToProps() {
  return createSelector(
    (state) => state.discoverMovie,
    (discoverMovie) => {
      return {
        ...discoverMovie.options,
        ...discoverMovie.posterOptions
      };
    }
  );
}

function createMapDispatchToProps(dispatch, props) {
  return {
    onChangePosterOption(payload) {
      dispatch(setListMoviePosterOption(payload));
    },
    onChangeOption(payload) {
      dispatch(setListMovieOption(payload));
    }
  };
}

export default connect(createMapStateToProps, createMapDispatchToProps)(AddListMoviePosterOptionsModalContent);
