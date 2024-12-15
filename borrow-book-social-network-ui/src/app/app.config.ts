import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {httpTokenInterceptor} from "./services/interceptor/http-token.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(
    withInterceptors([httpTokenInterceptor])
  )]
};
