import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AuxiliaryCountersForm from './AuxiliaryCountersForm';

import {
  createLoadingSelector,
  handleUpdateProductAuxCounters,
  ProductsActionTypes,
  selectActiveItemId,
  selectProductAuxCounters,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.UPDATE_PRODUCT_AUX_COUNTERS,
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
