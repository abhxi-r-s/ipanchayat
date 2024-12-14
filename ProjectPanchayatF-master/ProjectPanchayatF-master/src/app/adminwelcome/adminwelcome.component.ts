import { Component, OnInit } from '@angular/core';
import { PanchayatserviceService } from '../panchayatservice.service';

@Component({
  selector: 'app-adminwelcome',
  templateUrl: './adminwelcome.component.html',
  styleUrls: ['./adminwelcome.component.css']
})
export class AdminwelcomeComponent implements OnInit {

  constructor(private api:PanchayatserviceService) {
   
    this.data=this.api.Retriveadmin()
    console.log(this.data)
    if(this.data)
    {
      console.log(this.data)
      console.log(this.data.data1.adminname)
      this.data3=this.data.data1.adminname
      console.log(this.data3)
   }
    
    }
   

  ngOnInit(): void {
  }
  data:any=[]
  data3:any=[]

}
