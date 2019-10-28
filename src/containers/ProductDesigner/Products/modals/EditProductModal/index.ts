import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditProductModal from './EditProductModal';

import { selectCurrentProductName, selectIsProductOverride } from 'store/domains';
import { StoreState } from 'store/StoreState';

const generalProductFormDirty = isDirty(formNamesConst.GENERAL_PRODUCT);
const productDetailsFormDirty = isDirty(formNamesConst.PRODUCT_AUXILIARY_COUNTERS);
const productRulesFormDirty = isDirty(formNamesConst.PRODUCT_RULES);
const servicesFormDirty = isDirty(formNamesConst.PRODUCT_SERVICES);
const aprsFormDirty = isDirty(formNamesConst.PRODUCT_APRS);

const mapStateToProps = (state: StoreState) => ({
  isGeneralProductFormDirty: generalProductFormDirty(state),
  isProductDetailsFormDirty: productDetailsFormDirty(state),
  isProductRulesFormDirty: productRulesFormDirty(state),
  isServicesFormDirty: servicesFormDirty(state),
  isAprsFormDirty: aprsFormDirty(state),
  currentProductName: selectCurrentProductName(state),
  isProductOverride: selectIsProductOverride(state),
});

export default connect(
  mapStateToProps
)(EditProductModal);
