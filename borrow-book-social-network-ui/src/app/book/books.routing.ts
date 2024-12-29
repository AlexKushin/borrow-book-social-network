import {Routes} from "@angular/router";
import {MainComponent} from "./pages/main/main.component";
import {BookListComponent} from "./pages/book-list/book-list.component";
import {MyBooksComponent} from "./pages/my-books/my-books.component";
import {ManageBookComponent} from "./pages/manage-book/manage-book.component";

export const BOOK_ROUTES: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    {
      path: '',
      component: BookListComponent
    },
    {
      path: 'my-books',
      component: MyBooksComponent
    },
    {
      path: 'manage',
      component: ManageBookComponent
    },
    {
      path: 'manage/:bookId',
      component: ManageBookComponent
    }
  ]
}];

