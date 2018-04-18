import { Component } from '@angular/core';
//import ‘rxjs/add/operator/map’;
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { client } from './client';
import { ProductService } from './products';


//@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
// export class AppComponent {
//   public result:any;
//   constructor(public http:Http){
      // this.CallMe();
  //}

  // API(){
  //   let url= "http://tachetechnologies.com/provApi/provConsole/api/v1/viewallclient" ;
  //   return this.http.get(url).map(
  //   res => res.json()
  //   )
  // }  
    

  // CallMe(){
  //   this.API().subscribe(post =>{
  //   this.result = post.clients.username
  //   })
  //   console.log(result);
  // }  

//}

export   class   AppComponent  {
  iproducts: client[];
  constructor(public _product: ProductService) {
  }
  
  ngOnInit() : void {
     this._product.getproducts()
     .subscribe(iproducts => this.iproducts = iproducts);
  }
}
