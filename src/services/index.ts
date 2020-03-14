import { ApiClient } from './apiClient';
import { Logger } from './logger';
import { Storage } from './storage';

import config from 'config';

export const loggerService = new Logger();

export const storageService = new Storage();

export const apiClientService = new ApiClient(config.apiUrl);
