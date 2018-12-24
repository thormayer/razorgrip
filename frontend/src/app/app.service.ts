import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllCities(){
    return this.http.get(`${this.url}/countries`);  
  }

  getCityByAbbrv(term) {
    return this.http.get(`${this.url}/city/${term}`);
  }
}
