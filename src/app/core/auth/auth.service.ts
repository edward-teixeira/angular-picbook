import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { environment } from '../../../environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = API;

  constructor(
    private http: HttpClient,
    private userService: UserService,) { }

  authenticate(userName: string, password: string) {

    return this.http
    .post(this.API_URL + '/user/login', { userName, password }, { observe: 'response'})
    .pipe(tap(res =>  {
      const authToken = res.headers.get('x-access-token');
      this.userService.setToken(authToken);
      console.log(`Usuario autenticado com o token ${authToken}`);
    }));

  }

}
