import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ipAdd = 'https://api.ipify.org';

  constructor(private http: HttpClient) { }

    getClientIPAddress() { 
      
      return this.http.get(`${this.ipAdd}?format=json`);  
    }
}
