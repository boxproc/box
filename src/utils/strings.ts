import { links } from 'consts';

export const currentYear = new Date().getFullYear();

export const parseNumber = (value: string | number, emptyAsZero?: boolean) => {
  if (emptyAsZero && value === '') {
    return 0;
  } else {
    if (!isNaN(parseFloat(value as string)) && isFinite(value as number)) {
      return parseFloat(value as string);
    }

    return value;
  }
};

export const getCurrentBPSUrl = (pathname: string) => {
  const currentPathname = pathname.slice(1);
  const currentUrl = `${links.BPS_BASE}${currentPathname}`;

  return currentUrl;
};

export const copyTextToClipboard = (text: string) => {
  const textArea = document.createElement('textarea');
  textArea.style.position = 'fixed';
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  document.execCommand('copy');

  document.body.removeChild(textArea);
};
