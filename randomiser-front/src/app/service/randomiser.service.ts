import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RandomiserService {
  public baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  submitRandomiser(number: string) {
    return this.http.post(this.baseUrl + 'api/v1/create_codes', {
      number: number,
    });
  }
}
