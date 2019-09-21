import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditProductModal from './EditProductModal';

import { selectCurrentProductName } from 'store/domains';
import { StoreState } from 'store/StoreState';

const generalProductFormDirty = isDirty(formNamesConst.GENERAL_PRODUCT);
const productDetailsFormDirty = isDirty(formNamesConst.PRODUCT_AUXILIARY_COUNTERS);
const productRulesFormDirty = isDirty(formNamesConst.PRODUCT_RULES);

const mapStateToProps = (state: StoreState) => ({
  isGeneralProductFormDirty: generalProductFormDirty(state),
  isProductDetailsFormDirty: productDetailsFormDirty(state),
  isProductRulesFormDirty: productRulesFormDirty(state),
  currentProductName: selectCurrentProductName(state),
});

export default connect(
  mapStateToProps
)(EditProductModal);
