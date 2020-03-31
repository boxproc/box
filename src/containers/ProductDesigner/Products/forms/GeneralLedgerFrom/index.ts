import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import GeneralLedgerFrom from './GeneralLedgerFrom';

import {
  activeItemIdSelector,
  createLoadingSelector,
  handleUpdateProductGL,
  IStoreState,
  ProductGLActionTypes,
  selectProductGL,
} from 'store';

const loadingSelector = createLoadingSelector([
  ProductGLActionTypes.UPDATE_GENERAL_LEDGER,
]);

const mapStateToProps = (state: IStoreState) => ({
  isLoading: loadingSelector(state),
  initialValues: selectProductGL(state),
  currentProductId: activeItemIdSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateGeneralLedger: handleUpdateProductGL,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeneralLedgerFrom);
