import { connect } from 'react-redux';

import IllustrationRewardsTable from './IllustrationRewardsTable';

import { selectRewardsIllustration } from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  rewardIllustration: selectRewardsIllustration(state),
});

export default connect(
  mapStateToProps
)(IllustrationRewardsTable);
