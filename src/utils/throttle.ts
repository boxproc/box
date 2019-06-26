export type Throttle = (func: any, delay: number) => void;

export const throttle: Throttle = (func, delay) => {
  let inThrottle: boolean = null;
  return (...args: Array<string>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, delay);
    }
  };
};

export const getDataAfter = <R = object>(data: R, timeout: number, rejectable?: boolean) =>
  new Promise<R>((resolve, reject) => setTimeout(
    () => !rejectable ? reject({ statusCode: 500 }) : resolve(data),
    timeout
  ));
