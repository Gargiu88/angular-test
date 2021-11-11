import { Component, Input, OnInit } from '@angular/core';;
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {
  username : string;
//  email: string;
  option: string;
  referente: string;
  result:  string;
  results: string[] = [];
  disableBtn: boolean = true;
  @Input()
  email: string | boolean

  constructor() { }

  ngOnInit() {
  }

  btnAdd(){
  switch (this.option){
    case 'referente1':
    this.result = this.username + " " + this.email + " referente1 ";
    break;
    case 'referente2': 
    this.result = this.username + " " + this.email + " referente2 "; 
    break;
    case 'referente3': 
    this.result = this.username + " " + this.email + " referente3 "; 
    break;
    case 'referente4': 
    this.result = this.username + " " + this.email + " referente4 "; 
    break;
    case 'referente5': 
    this.result = this.username + " " +  this.email  + " referente5 "; 
    break;
  }
  this.results.push(this.result);

}

 btnCanc(res){
 this.results.splice(res,1);
 // this.results.splice(this.results.indexOf(res),1)
 // delete this.result;
 }

 validateEmail(email) {
  const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  this.disableBtn = !regularExpression.test(String(email).toLowerCase());
 }
}
