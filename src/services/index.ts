import { ApiClient } from './apiClient';
import { Logger } from './logger';
import { Storage } from './storage';

export const logger = new Logger();

export const storage = new Storage();

export const apiClient = new ApiClient('/api');
