import { User } from './../../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSearchRequest } from '../../models';
import { RisultatoDTO } from '../../models/risultatoDTO';

export const GU = '/user/getUsers';
export const baseUrl =
  'https://1f06-94-101-54-139.eu.ngrok.io/academy/user/getUsers';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUsers(
    userSearchRequest: UserSearchRequest
  ): Observable<RisultatoDTO<User[]>> {
    return this.httpClient.post<RisultatoDTO<User[]>>(
      baseUrl + GU,
      userSearchRequest
    );
  }
}
