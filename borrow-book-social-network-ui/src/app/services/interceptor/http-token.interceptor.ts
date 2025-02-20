import {HttpHeaders, HttpInterceptorFn} from '@angular/common/http';
import {inject} from "@angular/core";
import {KeycloakService} from "../keycloak/keycloak.service";


export const httpTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const keycloakService = inject(KeycloakService); // Use Angular's inject function to access the TokenService
  const token = keycloakService.keycloak?.token; // Assume `token` is a getter or property in TokenService

  // Clone the request and attach the Authorization header if the token is present
  const authReq = token
    ? req.clone(
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`
        })
      })
    : req;
  return next(authReq);
};
