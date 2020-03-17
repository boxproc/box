import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AuxiliaryCountersForm from './AuxiliaryCountersForm';

import {
  createLoadingSelector,
  handleUpdateProductAuxCounters,
  ProductAuxCountersActionTypes,
  selectActiveItemId,
  selectProductAuxCounters,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  ProductAuxCountersActionTypes.UPDATE_PRODUCT_AUX_COUNTERS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  initialValues: selectProductAuxCounters(state),
  currentProductId: selectActiveItemId(state),
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
