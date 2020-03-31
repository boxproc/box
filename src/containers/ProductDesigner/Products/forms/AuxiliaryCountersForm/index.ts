import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AuxiliaryCountersForm from './AuxiliaryCountersForm';

import {
  activeItemIdSelector,
  createLoadingSelector,
  handleUpdateProductAuxCounters,
  IStoreState,
  ProductAuxCountersActionTypes,
  selectProductAuxCounters,
} from 'store';

const loadingSelector = createLoadingSelector([
  ProductAuxCountersActionTypes.UPDATE_PRODUCT_AUX_COUNTERS,
]);

const mapStateToProps = (state: IStoreState) => ({
  isLoading: loadingSelector(state),
  initialValues: selectProductAuxCounters(state),
  currentProductId: activeItemIdSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateProductAuxCounters: handleUpdateProductAuxCounters,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuxiliaryCountersForm);
