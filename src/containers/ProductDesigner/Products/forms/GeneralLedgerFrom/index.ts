import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import GeneralLedgerFrom from './GeneralLedgerFrom';

import {
  createLoadingSelector,
  handleUpdateGeneralLedger,
  ProductGeneralLedgerActionTypes,
  selectActiveItemId,
  selectProductGeneralLedger,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  ProductGeneralLedgerActionTypes.UPDATE_GENERAL_LEDGER,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  initialValues: selectProductGeneralLedger(state),
  currentProductId: selectActiveItemId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateGeneralLedger: handleUpdateGeneralLedger,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeneralLedgerFrom);
