
import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { client } from './client';
import { all_clients } from './client-list';


@Injectable()
export class ProductService {
   private _producturl='http://tachetechnologies.com/provApi/provConsole/api/v1/viewallclient';
   constructor(private _http: Http){}
   
//    getproducts(): Observable<client[]> {
//       return this._http.get(this._producturl)
//       .map((response: Response) => <client[]> response.json())
//       .do(data => console.log(JSON.stringify(data)));
//    }

getproducts(): Observable<client[]> {
    return this._http.get(this._producturl)
    .map((response: Response) => <client[]> response.json())
    .do(data => console.log(JSON.stringify(data)));

    // getproducts(): Observable<client[]> {
    //     return this._http.get(this._producturl)
    //     .map((response: Response) => <client[]> response.json());
    // }

}