import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ProductRepaymentForm from './ProductRepaymentForm';

import {
  currentProductStatementCycleTypeIdSelector,
  handleUpdateProductRepayment,
  isProductRepaymentUpdatingSelector,
  IStoreState,
  productRepaymentSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isProductRepaymentUpdatingSelector(state),
  initialValues: productRepaymentSelector(state),
  statementCycleTypeId: currentProductStatementCycleTypeIdSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateProductRepayment: handleUpdateProductRepayment,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductRepaymentForm);
