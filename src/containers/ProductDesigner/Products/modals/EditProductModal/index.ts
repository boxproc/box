import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditProductModal from './EditProductModal';

import { selectCurrentProductName, selectIsProductOverride } from 'store/domains';
import { StoreState } from 'store/StoreState';

const generalProductFormDirty = isDirty(formNamesConst.GENERAL_PRODUCT);
const productDetailsFormDirty = isDirty(formNamesConst.PRODUCT_DETAILS);
const productRulesFormDirty = isDirty(formNamesConst.PRODUCT_RULES);
const productAuxCounterFormDirty = isDirty(formNamesConst.PRODUCT_AUXILIARY_COUNTERS);
const aprsFormDirty = isDirty(formNamesConst.PRODUCT_APRS);
const feesFormDirty = isDirty(formNamesConst.PRODUCT_FEES);
const rewardsFormDirty = isDirty(formNamesConst.PRODUCT_REWARDS);
const servicesFormDirty = isDirty(formNamesConst.PRODUCT_SERVICES);
const glFormDirty = isDirty(formNamesConst.PRODUCT_GENERAL_LEDGER);

const mapStateToProps = (state: StoreState) => ({
  isGeneralProductFormDirty: generalProductFormDirty(state),
  isProductDetailsFormDirty: productDetailsFormDirty(state),
  isProductRulesFormDirty: productRulesFormDirty(state),
  isAuxCountersFormDirty: productAuxCounterFormDirty(state),
  isAprsFormDirty: aprsFormDirty(state),
  isFeesFormDirty: feesFormDirty(state),
  isRewardsFormDirty: rewardsFormDirty(state),
  isServicesFormDirty: servicesFormDirty(state),
  isGlFormDirty: glFormDirty(state),
  currentProductName: selectCurrentProductName(state),
  isProductOverride: selectIsProductOverride(state),
});

export default connect(
  mapStateToProps
)(EditProductModal);
