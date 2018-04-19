import { Component, OnInit } from '@angular/core';
import { client } from '../client';
import { all_clients } from '../client-list';

import { ProductService } from '../products';
//import { Cricketer } from './shared/Cricketer';  
import { Observable } from 'rxjs/Rx';  



@Component({
  selector: 'app-clint-info',
  templateUrl: './clint-info.component.html',
  styleUrls: ['./clint-info.component.css'],
  providers: [ProductService]
})
export class ClintInfoComponent implements OnInit {

  public result:any;

  //client = "Anand";

  clients : client = {
    id: "2",
    username: 'Anand',
    prefix: 'pre',
    email: 'anand@tache.in' ,
    comp_name: 'pro',
    status: '1',
    is_deleted : '2'
  }

  AllClients = all_clients;

  constructor() { }

  ngOnInit() {  
  }
  
}
