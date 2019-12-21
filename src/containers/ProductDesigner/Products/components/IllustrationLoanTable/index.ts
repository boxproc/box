import { connect } from 'react-redux';

import IllustrationLoanTable from './IllustrationLoanTable';

import {
  selectProductLoanIllustration
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  productIlustration: selectProductLoanIllustration(state),
});

export default connect(
  mapStateToProps
)(IllustrationLoanTable);
