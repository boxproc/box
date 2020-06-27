import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import DetailsForm from './DetailsForm';

import {
  activeItemIdSelector,
  currentProductDetailsSelector,
  handleGetProductDetails,
  handleUpdateProductDetails,
  isProductDetailsLoadingSelector,
  isProductDetailsUpdatingSelector,
  IStoreState,
} from 'store';

const formSelector = formValueSelector(formNamesConst.PRODUCT_DETAILS);

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isProductDetailsLoadingSelector(state),
  isUpdating: isProductDetailsUpdatingSelector(state),
  initialValues: currentProductDetailsSelector(state),
  currentProductId: activeItemIdSelector(state),
  interestDistributionValue: formSelector(state, 'interestDistributionType'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getProductDetails: handleGetProductDetails,
    updateProductDetails: handleUpdateProductDetails,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsForm);
