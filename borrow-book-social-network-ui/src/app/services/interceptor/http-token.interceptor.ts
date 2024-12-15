import {HttpHeaders, HttpInterceptorFn} from '@angular/common/http';
import {TokenService} from "../token/token.service";
import {inject} from "@angular/core";


export const httpTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService); // Use Angular's inject function to access the TokenService
  const token = tokenService.token; // Assume `token` is a getter or property in TokenService

  // Clone the request and attach the Authorization header if the token is present
  const authReq = token
    ? req.clone(
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token
        })
      })
    : req;
  return next(authReq);
};
