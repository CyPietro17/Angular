import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserSearchFormComponent } from './forms/user-search-form/user-search-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserSearchComponent,
    UserCreateComponent,
    UserSearchFormComponent,
  ],
  imports: [CommonModule, UserRoutingModule, ReactiveFormsModule, FormsModule],
})
export class UserModule {}
