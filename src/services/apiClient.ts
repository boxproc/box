import * as superagent from 'superagent';

interface HttpErrorResponse extends Error {
  response: object;
}

interface ApiParams {
  headers?: object;
  query?: object;
  data?: object;
  type?: string;
}

type Method = <T = object>(path: string, params?: ApiParams, defaultHeaders?: boolean) =>
  Promise<T>;

interface IApiClient {
  get: Method;
  post: Method;
  put: Method;
  delete: Method;
}

export class ApiClient implements IApiClient {
  methods = ['get', 'post', 'put', 'delete'];
  defaults = {};
  apiHost: string;

  constructor(apiHost: string) {
    this.apiHost = apiHost;

    this.methods.forEach((method) =>
      this[method] = <T = object>(
        path: string,
        { headers, query, data, type }: ApiParams = {},
        isDHeadersWanted: boolean = true
      ): Promise<T> =>
        new Promise((resolve, reject) => {

          const url = this._formatUrl(path);
          const request = superagent[method](url) as superagent.Request;

          // set default headers and custom
          if (headers || isDHeadersWanted) {
            const defaultHeaders = isDHeadersWanted ? this.defaults : {};
            const newHeaders = { ...defaultHeaders, ...headers };

            request.set(newHeaders);
          }

          if (type) {
            request.type(type);
          }

          if (query) {
            request.query(query);
          }

          if (data) {
            request.send(data);
          }

          request.end(
            (err: HttpErrorResponse, res: superagent.Response) => {
              return err ? reject(err.response) : resolve(res.body !== null ? res.body : res);
            }
          );
        })
    );
  }

  // Default method's implementations, override is in constructor
  get: Method = () => new Promise(resolve => resolve());
  post: Method = () => new Promise(resolve => resolve());
  put: Method = () => new Promise(resolve => resolve());
  delete: Method = () => new Promise(resolve => resolve());

  set(key: string, value: string): void {
    this.defaults[key] = value;
  }

  private _adjustPath = (path: string): string =>
    path[0] !== '/' ? '/' + path : path

  private _formatUrl = (path: string): string => {
    const adjustedPath = this._adjustPath(path);

    return this.apiHost + adjustedPath;
  }
}
