import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNames } from 'consts';

import AddCustomerModal from './AddCustomerModal';

import { closeModal } from 'store/domains';
import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNames.ADD_LEDGER_CUSTOMER);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
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
)(AddCustomerModal);
