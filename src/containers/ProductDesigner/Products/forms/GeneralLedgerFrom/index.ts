import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import GeneralLedgerFrom from './GeneralLedgerFrom';

import {
  activeItemIdSelector,
  handleUpdateProductGL,
  isProductGLUpdatingSelector,
  IStoreState,
  productGLSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isProductGLUpdatingSelector(state),
  initialValues: productGLSelector(state),
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
