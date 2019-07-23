import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { withRouter } from 'react-router-dom';

import Header from './Header';

import {
  createLoadingSelector,
  handleGetInstitutions,
  handleGetUiItems,
  handleUserLogout,
  selectDefaultInstitutions,
  selectFirstName,
  selectLastName,
  selectUiItems,
  UiItemsActionTypes,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  UiItemsActionTypes.GET_UI_ITEMS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  uiItems: selectUiItems(state),
  institutions: selectDefaultInstitutions(state),
  firstName: selectFirstName(state),
  lastName: selectLastName(state),
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
