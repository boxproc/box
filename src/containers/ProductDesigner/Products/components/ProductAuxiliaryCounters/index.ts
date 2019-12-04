import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import ProductAuxiliaryCounters from './ProductAuxiliaryCounters';

import { StoreState } from 'store/StoreState';

const formSelector = formValueSelector(formNamesConst.PRODUCT_AUXILIARY_COUNTERS);

const mapStateToProps = (state: StoreState) => ({
  isCounter1Enabled: formSelector(
    state,
    'auxCounter1Enabled'
  ),
  isCounter2Enabled: formSelector(
    state,
    'auxCounter2Enabled'
  ),
  isCounter3Enabled: formSelector(
    state,
    'auxCounter3Enabled'
  ),
});

export default connect(
  mapStateToProps
)(ProductAuxiliaryCounters);
