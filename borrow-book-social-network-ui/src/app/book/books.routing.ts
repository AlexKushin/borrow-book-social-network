import {Routes} from "@angular/router";
import {MainComponent} from "./pages/main/main.component";
import {BookListComponent} from "./pages/book-list/book-list.component";

export const BOOK_ROUTES: Routes = [{
  path: '',
  component: MainComponent,
  children: [
     {
       path: '',
       component: BookListComponent
     }
  ]
}];

