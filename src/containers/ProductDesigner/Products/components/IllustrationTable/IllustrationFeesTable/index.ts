import { connect } from 'react-redux';

import IllustrationFeesTable from './IllustrationFeesTable';

import { selectFeesIllustration } from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  feeIllustration: selectFeesIllustration(state),
});

export default connect(
  mapStateToProps
)(IllustrationFeesTable);
