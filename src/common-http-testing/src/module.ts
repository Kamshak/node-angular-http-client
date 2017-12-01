import { HTTP_CLIENT_PROVIDERS } from './../../../index';
import { ReflectiveInjector } from 'injection-js';
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {HttpBackend} from '../../common-http';

import {HttpTestingController} from './api';
import {HttpClientTestingBackend} from './backend';

export const TESTING_HTTP_PROVIDERS = [
  HttpClientTestingBackend,
  {provide: HttpBackend, useExisting: HttpClientTestingBackend},
  {provide: HttpTestingController, useExisting: HttpClientTestingBackend},
];
