import 'react-app-polyfill/ie11';

import 'core-js/features/array';
import 'core-js/features/number';
import 'core-js/features/string';

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
