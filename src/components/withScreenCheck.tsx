import React from 'react';

import { sizes } from 'theme/media';

import { componentUtil, throttleUtil } from 'utils';

export interface WithScreenCheckProps {
  isMobile?: boolean;
  isTabletS?: boolean;
  isTablet?: boolean;
  isDesktop?: boolean;
}

export interface WithScreenCheckState {
  width: number;
  previousWidth: number;
}

interface Options {
  isMobile: number;
  isTabletS: number;
  isTablet: number;
  isDesktop: number;
}

const withScreenCheck = (options: Options) =>
  <OriginProps extends {}>(Component: React.ComponentType<OriginProps & WithScreenCheckProps>) =>
    class WithScreenCheck extends React.Component<OriginProps, WithScreenCheckState> {

      static displayName = `WithScreenCheck(${componentUtil.getDisplayName(Component)})`;

      constructor(props: OriginProps) {
        super(props);
        this.state = {
          width: window.innerWidth,
          previousWidth: 0,
        };
      }

      componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }

      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      }

      render() {
        const { width } = this.state;

        const breakpoints = this.getBreakpoints(options, width);

        return (
          <Component
            {...this.props}
            {...breakpoints}
          />
        );
      }

      handleWindowSizeChange = () => {
        const { previousWidth } = this.state;
        const currentWidth = window.innerWidth;

        if (!previousWidth || (previousWidth !== currentWidth)) {
          throttleUtil.throttle(
            this.setState({
              width: currentWidth,
              previousWidth: currentWidth,
            }),
            1200
          );
        }
      }

      getBreakpoints = (obj: object, width: number): WithScreenCheckProps => {
        const result: object = {};
        Object.keys(obj).forEach((name) => result[name] = width <= obj[name]);

        return result;
      }
    };

export default withScreenCheck({
  isMobile: sizes.phone,
  isTabletS: sizes.tabletS,
  isTablet: sizes.tablet,
  isDesktop: sizes.desktop,
});
