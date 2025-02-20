import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {KeycloakService} from "../../services/keycloak/keycloak.service";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  //authRequest: AuthenticationRequest = {email: '', password: ''};
  //errorMessage: Array<string> = [];

  constructor(
    private keycloakService: KeycloakService
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.keycloakService.init();
    await this.keycloakService.login();
  }

  /*login() {
    this.errorMessage = [];
    this.authService.authenticate(
      {
        body: this.authRequest
      }
    ).subscribe({
      next: (res) => {
        this.tokenService.token = res.token as string;
        this.router.navigate(['books']);
      },
      error: (err) => {
        console.log(err);
        if (err.error.validationErrors) {
          this.errorMessage = err.error.validationErrors
        } else {
          this.errorMessage.push(err.error.businessErrorDescription)
        }
      }
    });
  }

  register() {
    this.router.navigate(['register'])
  }*/
}
