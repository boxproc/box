import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditProductModal from './EditProductModal';

import {
  currentProductNameSelector,
  currentProductTypeSelector,
  isProductOverrideSelector,
  IStoreState,
} from 'store';

const generalProductFormDirty = isDirty(formNamesConst.GENERAL_PRODUCT);
const productDetailsFormDirty = isDirty(formNamesConst.PRODUCT_DETAILS);
const productRulesFormDirty = isDirty(formNamesConst.PRODUCT_RULES);
const productAuxCounterFormDirty = isDirty(formNamesConst.PRODUCT_AUXILIARY_COUNTERS);
const servicesFormDirty = isDirty(formNamesConst.PRODUCT_SERVICES);
const glFormDirty = isDirty(formNamesConst.PRODUCT_GENERAL_LEDGER);

const mapStateToProps = (state: IStoreState) => ({
  isGeneralProductFormDirty: generalProductFormDirty(state),
  isProductDetailsFormDirty: productDetailsFormDirty(state),
  isProductRulesFormDirty: productRulesFormDirty(state),
  isAuxCountersFormDirty: productAuxCounterFormDirty(state),
  isServicesFormDirty: servicesFormDirty(state),
  isGlFormDirty: glFormDirty(state),
  currentProductName: currentProductNameSelector(state),
  isProductOverride: isProductOverrideSelector(state),
  currentProductType: currentProductTypeSelector(state),
});

export default connect(
  mapStateToProps
)(EditProductModal);
