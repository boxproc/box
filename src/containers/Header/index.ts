import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { withRouter } from 'react-router-dom';

import Header from './Header';

import {
  createLoadingSelector,
  handleGetInstitutions,
  handleGetUiItems,
  handleUserLogout,
  selectHelpLink,
  selectInstitutions,
  selectIsReadOnly,
  selectUiItems,
  StoreState,
  UiItemsActionTypes,
} from 'store';

const loadingSelector = createLoadingSelector([
  UiItemsActionTypes.GET_UI_ITEMS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  uiItems: selectUiItems(state),
  institutions: selectInstitutions(state),
  isReadOnly: selectIsReadOnly(state),
  helpLink: selectHelpLink(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getUiItems: handleGetUiItems,
    userLogout: handleUserLogout,
    getInstitutions: handleGetInstitutions,
  },
  dispatch
);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
