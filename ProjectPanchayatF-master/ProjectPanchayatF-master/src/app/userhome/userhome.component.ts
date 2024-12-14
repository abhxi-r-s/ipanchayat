import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PanchayatserviceService } from '../panchayatservice.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  data={

    name:"",
    password:""
  }

  constructor(private api:PanchayatserviceService, private router:Router) { }

  ngOnInit(): void {
  }
  Ulogin(){

    this.api.ulogin(this.data).subscribe((data)=>{
      if(data.success===true){
        console.log(data)
        this.api.Saveuser(data)
        this.router.navigate(['/uw'])
      }
      else {
        alert(data.success)
      }
    })  

  }


}