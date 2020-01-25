import { connect } from 'react-redux';

import LedgerConvertToLoanForm from './LedgerConvertToLoanForm';

import { selectInstitutionLoanProductsOptions, selectLedgerTransactionAmount } from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  loanProductsOptions: selectInstitutionLoanProductsOptions(state),
  initialValues: {
    amount: selectLedgerTransactionAmount(state),
  },
});

export default connect(
  mapStateToProps
)(LedgerConvertToLoanForm);
