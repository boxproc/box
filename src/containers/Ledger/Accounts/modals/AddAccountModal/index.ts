import { connect } from 'react-redux';
import { formValueSelector, isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddAccountModal from './AddAccountModal';

import { selectInstitutionProducts, selectInstitutionsOptions } from 'store/domains';
import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNamesConst.LEDGER_ACCOUNT);

const formSelector = formValueSelector(formNamesConst.LEDGER_ACCOUNT);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
  institutionsOptions: selectInstitutionsOptions(state),
  institutionProducts: selectInstitutionProducts(state),
  currentProduct: formSelector(state, 'product'),
});

export default connect(
  mapStateToProps
)(AddAccountModal);
