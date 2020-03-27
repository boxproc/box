import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AuxiliaryCountersForm from './AuxiliaryCountersForm';

import {
  activeItemIdSelector,
  createLoadingSelector,
  handleUpdateProductAuxCounters,
  ProductAuxCountersActionTypes,
  selectProductAuxCounters,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  ProductAuxCountersActionTypes.UPDATE_PRODUCT_AUX_COUNTERS,
]);

const mapStateToProps = (state: StoreState) => ({
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
