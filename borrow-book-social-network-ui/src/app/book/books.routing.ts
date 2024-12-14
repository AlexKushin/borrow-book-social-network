import {Routes} from "@angular/router";
import {MainComponent} from "./pages/main/main.component";

export const BOOK_ROUTES: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    /*
     {
       path: 'some-path/:id',
       component: SomeComponent
     }*/
  ]
}];

