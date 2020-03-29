import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { withRouter } from 'react-router-dom';

import Header from './Header';

import {
  createLoadingSelector,
  handleGetUiItems,
  handleGetUserInstitutions,
  handleUserLogout,
  isReadOnlySelector,
  selectHelpLink,
  selectUiItems,
  StoreState,
  UiItemsActionTypes,
  userInstitutionsSelector,
} from 'store';

const loadingSelector = createLoadingSelector([
  UiItemsActionTypes.GET_UI_ITEMS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  uiItems: selectUiItems(state),
  institutions: userInstitutionsSelector(state),
  isReadOnly: isReadOnlySelector(state),
  helpLink: selectHelpLink(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getUiItems: handleGetUiItems,
    userLogout: handleUserLogout,
    getInstitutions: handleGetUserInstitutions,
  },
  dispatch
);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
