import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AuxiliaryCountersForm from './AuxiliaryCountersForm';

import {
  activeItemIdSelector,
  handleUpdateProductAuxCounters,
  isProductAuxCountersUpdatingSelector,
  IStoreState,
  productAuxCountersSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isProductAuxCountersUpdatingSelector(state),
  initialValues: productAuxCountersSelector(state),
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
