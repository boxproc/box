import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { withRouter } from 'react-router-dom';

import Header from './Header';

import {
  handleGetUiItems,
  handleGetUserInstitutions,
  handleUserLogout,
  helpLinkSelector,
  isReadOnlySelector,
  IStoreState,
  isUiItemsLoadingSelector,
  uiItemsSelector,
  userInstitutionsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isUiItemsLoadingSelector(state),
  uiItems: uiItemsSelector(state),
  institutions: userInstitutionsSelector(state),
  isReadOnly: isReadOnlySelector(state),
  helpLink: helpLinkSelector(state),
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
