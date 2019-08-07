import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Accounts from './Accounts';

import {
  createLoadingSelector,
  openModal,
  selectInstitutionsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    openModal,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accounts);
