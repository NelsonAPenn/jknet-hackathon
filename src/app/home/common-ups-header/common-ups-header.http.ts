import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Header } from './common-ups-header.model';

@Injectable({
providedIn: 'root'
})
export class HttpService {
    apiUrl = 'http://localhost:8080/glance/Header';
    
    constructor(private _http: HttpClient) { }
    getHeader() {
      return this._http.get<Header>(this.apiUrl);
    }
}  