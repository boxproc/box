import 'react-app-polyfill/ie11';

import 'core-js';

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
