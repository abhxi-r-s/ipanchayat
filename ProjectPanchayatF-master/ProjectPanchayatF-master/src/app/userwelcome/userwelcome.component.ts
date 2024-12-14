import { Component, OnInit } from '@angular/core';
import { PanchayatserviceService } from '../panchayatservice.service';

@Component({
  selector: 'app-userwelcome',
  templateUrl: './userwelcome.component.html',
  styleUrls: ['./userwelcome.component.css']
})
export class UserwelcomeComponent implements OnInit {

  constructor(private ali:PanchayatserviceService) {

    ali.newsview().subscribe((response)=>{this.data2=response})
    this.data=this.ali.Retriveuser()
    if(this.data)
    {
      console.log(this.data.data.name)
      this.data3=this.data.data.name
      console.log(this.data3)
   }
  }
  ngOnInit(): void {
  }
  data:any=[]
  data2:any=[]
  data3:any=[]
}
