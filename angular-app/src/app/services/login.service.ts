import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(accountOutDto: AccountOutDto): Observable<AccountInDto> {
    let httpHeaders = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Accept', 'application/json');

    return this.httpClient.post<AccountInDto>(
      'http://localhost:8080/login',
      accountOutDto,
      {
        headers: httpHeaders
      }
    );
  }
}
