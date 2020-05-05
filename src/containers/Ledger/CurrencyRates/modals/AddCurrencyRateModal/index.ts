import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddCurrencyRateModal from './AddCurrencyRateModal';

import { IStoreState } from 'store';

const dirty = isDirty(formNamesConst.CURRENCY_RATES);

const mapStateToProps = (state: IStoreState) => ({
  isFormDirty: dirty(state),
});

export default connect(
  mapStateToProps
)(AddCurrencyRateModal);
