import { Component, OnInit} from '@angular/core';
import { ApiService } from './Services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'applicazione';
  ipAdd : string;
  constructor(private serv :ApiService) { }

  ngOnInit() {
    this.getIPAddress();
  }

  getIPAddress()
  {
    this.serv.getClientIPAddress().subscribe((res:any)=>{
      this.ipAdd = res.ip;
    }, errore => {
      console.log(errore)
    });

  } 
}
