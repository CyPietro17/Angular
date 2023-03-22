import { UserSearchRequest } from './../../models/user-search-request';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { UserSearchFormComponent } from '../../forms/user-search-form/user-search-form.component';
import { UserService } from '../../services';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
})
export class UserSearchComponent implements AfterViewInit {
  @ViewChild(UserSearchFormComponent) usForm!: UserSearchFormComponent;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private userService: UserService
  ) {}

  ngAfterViewInit(): void {
    this.usForm.createForm();
    this.changeDetectorRef.detectChanges();
  }

  search() {
    console.log('a maronn', this.prepareSearchRequest());
    this.userService.getUsers(this.prepareSearchRequest());
  }

  prepareSearchRequest(): UserSearchRequest {
    let userSearchRequest: UserSearchRequest;
    userSearchRequest = {
      t_name: this.usForm.name,
      t_surname: this.usForm.surname,
      t_username: this.usForm.username,
      t_role: this.usForm.role,
    };
    return userSearchRequest;
  }
}
