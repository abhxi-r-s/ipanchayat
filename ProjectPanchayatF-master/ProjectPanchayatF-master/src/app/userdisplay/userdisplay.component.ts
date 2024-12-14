import { Component, OnInit } from '@angular/core';
import { PanchayatserviceService } from '../panchayatservice.service';

@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})
export class UserdisplayComponent implements OnInit {

  constructor(private asi:PanchayatserviceService) {

    asi.userview().subscribe((response)=>{this.data=response})    
   }
   
  
  ngOnInit(): void {
  }
  deleteuser(i:any){

    this.asi.Deleteuser(i).subscribe(

      (data)=>{

        console.log(data)
        window.location.reload()
      }
    )
  }
  data:any=[]
}
