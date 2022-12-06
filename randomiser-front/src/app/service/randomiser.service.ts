import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RandomiserService {
  public baseUrl = 'http://localhost:8000/';

  constructor(private http: HttpClient) {}

  submitRandomiser(number: any) {
    console.log(number);
    
    return this.http.post(this.baseUrl + 'api/v1/create_codes', {
      number: number,
    });
  }
}
