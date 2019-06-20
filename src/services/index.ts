import { ApiClient } from './apiClient';
import { Logger } from './logger';
import { Storage } from './storage';

import config from 'config';

export const logger = new Logger();

export const storage = new Storage();

export const apiClient = new ApiClient(config.apiUrl);
