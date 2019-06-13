export const isAppleDevice = () => {
  const userAgent = navigator.userAgent.toLowerCase();

  return (
    (userAgent.indexOf('ipad') > -1) ||
    (userAgent.indexOf('iphone') > -1) ||
    (userAgent.indexOf('ipod') > -1)
  );
};

export const isTouchscreenEnabled = 'ontouchstart' in window || navigator.msMaxTouchPoints;
