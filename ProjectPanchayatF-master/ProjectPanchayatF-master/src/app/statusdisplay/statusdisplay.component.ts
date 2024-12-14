import { Component, OnInit } from '@angular/core';
import { PanchayatserviceService } from '../panchayatservice.service';

@Component({
  selector: 'app-statusdisplay',
  templateUrl: './statusdisplay.component.html',
  styleUrls: ['./statusdisplay.component.css']
})
export class StatusdisplayComponent implements OnInit {

  constructor(private api:PanchayatserviceService) { 
    this.data=this.api.Retriveuser()
    console.log(this.data)
    if(this.data)
    {
      console.log(this.data.data.voterid)
      this.data3=this.data
      console.log(this.data3)
      this.api.viewvoter(this.data3).subscribe(
        (data)=>{
         
          this.data4=data
          console.log("dssaa")
          console.log(this.data4)

        }
      )
   }
  }

  ngOnInit(): void {
  }
data:any=[]
data3:any=[]
data4:any=[]
}
