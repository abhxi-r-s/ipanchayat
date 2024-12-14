import { Component, OnInit } from '@angular/core';
import { PanchayatserviceService } from '../panchayatservice.service';

@Component({
  selector: 'app-viewrequest',
  templateUrl: './viewrequest.component.html',
  styleUrls: ['./viewrequest.component.css']
})
export class ViewrequestComponent implements OnInit {

  constructor(private api:PanchayatserviceService) {

    api.requestview().subscribe((response)=>{this.data=response}) 
   }

  ngOnInit(): void {
  }
  approve(i:any){

    this.api.Approve(i).subscribe((response)=>{
      
      this.data=response
      console.log(this.data)
    window.location.reload()})

  }
  deny(i:any){
    this.api.Deny(i).subscribe((response)=>{

      this.data=this.data.filter((u:any)=>u!==i)

    })
  }
  data:any=[
    
  ]

}
