import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Root from './Root';

import {
  selectIsRelogin,
  selectVisibleUiItemsList,
  setIsRelogin,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  visibleUiItemsList: selectVisibleUiItemsList(state),
  isRelogin: selectIsRelogin(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    setIsRelogin,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
