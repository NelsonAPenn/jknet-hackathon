import { Pkg, Flight } from './package.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
providedIn: 'root'
})

export class HttpService {
    apiUrl = 'http://169.254.8.64:3002/getAllPackageInfo';

    constructor(private _http: HttpClient) { }

    // Get request packages from the server
    getPackage(filter) {
      return this._http.post<Flight[]>(this.apiUrl, {inboundWing:filter} )

    }
}  