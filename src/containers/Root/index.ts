import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Root from './Root';

import {
  createLoadingSelector,
  handleGetUiItems,
  selectVisibleUiItems,
  UiItemsActionTypes,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  UiItemsActionTypes.GET_UI_ITEMS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  visibleUiItems: selectVisibleUiItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getUiItems: handleGetUiItems,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
