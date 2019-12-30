import { connect } from 'react-redux';

import IllustrationTransactionsTable from './IllustrationTransactionsTable';

import { selectTransactionsIllustration } from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  transactionsIllustration: selectTransactionsIllustration(state),
});

export default connect(
  mapStateToProps
)(IllustrationTransactionsTable);
