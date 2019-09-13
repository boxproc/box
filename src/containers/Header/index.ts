import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { withRouter } from 'react-router-dom';

import Header from './Header';

import {
  // AuthActionTypes,
  createLoadingSelector,
  handleGetInstitutions,
  handleGetUiItems,
  handleUserLogout,
  openModal,
  selectInstitutions,
  selectUiItems,
  selectUserFirstName,
  selectUserLastName,
  selectUserName,
  UiItemsActionTypes,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  UiItemsActionTypes.GET_UI_ITEMS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  uiItems: selectUiItems(state),
  institutions: selectInstitutions(state),
  firstName: selectUserFirstName(state),
  lastName: selectUserLastName(state),
  username: selectUserName(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getUiItems: handleGetUiItems,
    userLogout: handleUserLogout,
    getInstitutions: handleGetInstitutions,
    openModal,
  },
  dispatch
);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
