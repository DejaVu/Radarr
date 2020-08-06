import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { setListMovieOption } from 'Store/Actions/discoverMovieActions';
import AddListMovieTableOptions from './AddListMovieTableOptions';

function createMapStateToProps() {
  return createSelector(
    (state) => state.discoverMovie,
    (discoverMovie) => {
      return discoverMovie.options;
    }
  );
}

function createMapDispatchToProps(dispatch, props) {
  return {
    onChangeOption(payload) {
      dispatch(setListMovieOption(payload));
    }
  };
}

export default connect(createMapStateToProps, createMapDispatchToProps)(AddListMovieTableOptions);

