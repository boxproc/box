import 'react-app-polyfill/ie11';

import 'core-js/features/array/fill';
import 'core-js/features/array/find';
import 'core-js/features/array/includes';
import 'core-js/features/number/is-nan';
import 'core-js/features/string/match';

/* tslint:disable */
(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css: string) {
      let node = this;

      while (node) {
        if (node.matches(css)) {
          return node;
        } else {
          node = node.parentElement;
        }
      }
      return null;
    };
  }
})();
/* tslint:enable */
