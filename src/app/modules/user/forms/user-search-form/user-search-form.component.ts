import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-search-form',
  templateUrl: './user-search-form.component.html',
  styleUrls: ['./user-search-form.component.css'],
})
export class UserSearchFormComponent {
  @Output() heandleSearch = new EventEmitter<void>();

  searchForm!: FormGroup;

  constructor() {}

  createForm() {
    this.searchForm = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      username: new FormControl(),
      role: new FormControl(),
    });
  }

  get name(): string {
    return this.searchForm.get('name')?.value;
  }

  set name(name: string) {
    this.searchForm.get('name')?.setValue(name);
  }

  get surname(): string {
    return this.searchForm.get('surname')?.value;
  }

  set surname(surname: string) {
    this.searchForm.get('surname')?.setValue(surname);
  }

  get username(): string {
    return this.searchForm.get('username')?.value;
  }

  set username(username: string) {
    this.searchForm.get('username')?.setValue(username);
  }

  get role(): string {
    return this.searchForm.get('role')?.value;
  }

  set role(role: string) {
    this.searchForm.get('role')?.setValue(role);
  }

  disableForm() {
    this.searchForm.disable();
  }

  enableForm() {
    this.searchForm.enable();
  }

  resetForm() {
    this.searchForm.reset();
  }

  search() {
    this.heandleSearch.emit();
  }
}
