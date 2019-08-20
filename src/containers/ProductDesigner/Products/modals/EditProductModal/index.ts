import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNames } from 'consts';

import EditProductModal from './EditProductModal';

import { closeModal, selectCurrentProductName } from 'store/domains';
import { StoreState } from 'store/StoreState';

const generalProductFormDirty = isDirty(formNames.GENERAL_PRODUCT);
const productDetailsFormDirty = isDirty(formNames.PRODUCT_AUXILIARY_COUNTERS);
const productRulesFormDirty = isDirty(formNames.PRODUCT_RULES);

const mapStateToProps = (state: StoreState) => ({
  isGeneralProductFormDirty: generalProductFormDirty(state),
  isProductDetailsFormDirty: productDetailsFormDirty(state),
  isProductRulesFormDirty: productRulesFormDirty(state),
  currentProductName: selectCurrentProductName(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    closeModal,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProductModal);
