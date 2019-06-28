import { Pkg } from './package.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})

export class HttpService {
    apiUrl = 'http://169.254.8.64:3002/getAllPackageInfo';

    constructor(private _http: HttpClient) { }

    // Get request packages from the server
    getPackage(filter) {
      return this._http.post<Pkg[]>(this.apiUrl, {inboundWing:filter});
    }
}  