import {Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {authGuard} from "./services/guard/auth.guard";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {path: 'login', component: LoginComponent},
  {
    path: 'books', loadChildren: () =>
      import('./book/books.routing').then(m => m.BOOK_ROUTES), canActivate: [authGuard]
  }
];
