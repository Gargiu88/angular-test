import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-calcolatrice',
  templateUrl: './calcolatrice.component.html',
  styleUrls: ['./calcolatrice.component.css']
})
export class CalcolatriceComponent implements OnInit {
  firstNum : number;
  secondNum: number;
  result:  number;
  operation: string;
  results:  number[] = [];

  constructor() { }

  ngOnInit() {
  }

  public btnClk(){
    switch (this.operation){
      case 'Somma':
      this.result = (this.firstNum*1 + this.secondNum*1); 
      break;
      case 'Sottrazione': 
      this.result = this.firstNum - this.secondNum; 
      break;
      case 'Moltiplicazione': 
      this.result = this.firstNum * this.secondNum; 
      break;
      case 'Divisione': 
      this.result = this.firstNum / this.secondNum; 
      break;
    }
    this.results.push(this.result);
  }

  btnCopy(res){
    this.firstNum = res;
  }

  btnCopy2(res){
    this.secondNum = res;
  }

}
