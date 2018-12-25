import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private key = 'AIzaSyBGHRwmoou9Y-zyX4ckx63zTQOvILodQwg'; 
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllCities(){
    return this.http.get(`${this.url}/countries`);  
  }

  getCityByAbbrv(term) {
    return this.http.get(`${this.url}/city/${term}`);
  }

  getlatlng(address){
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.convertValidAddress(address)}&key=${this.key}`);  
  }

  convertValidAddress(address) {
    return address.replace(' ','+');
  }
}
