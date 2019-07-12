export const set = (name: string, value: string, options?: any) => {
  options = options || {};

  let expires = options.expires;

  if (typeof expires === 'number' && expires) {
    const d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  let updatedCookie = name + '=' + value;

  for (const propName in options) {
    if (options.hasOwnProperty(propName)) {
      updatedCookie += '; ' + propName;
      const propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += '=' + propValue;
      }
    }
  }

  document.cookie = updatedCookie;
};

export const remove = (name: string) => {
  set(name, '', {
    expires: -1,
  });
};

export const get = (name: string) => {
  const matches = document.cookie.match(new RegExp(
    // eslint-disable-next-line
    '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
  ));

  return matches ? decodeURIComponent(matches[1]) : undefined;
};
