import { Component, OnInit } from '@angular/core';
import { PanchayatserviceService } from '../panchayatservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  data={
    name:"",
    ward:"",
    address:"",
    voterid:"",
    password:""

  }

  constructor(private api:PanchayatserviceService) { }

  ngOnInit(): void {
    (() => {
      'use strict'
    
      const forms = document.querySelectorAll('.needs-validation')
      Array.prototype.slice.call(forms).forEach(form => {
        form.addEventListener('submit',function(event:any){
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
      })
    })()
  }
  Usignup(){

    this.api.usignup(this.data).subscribe((data)=>{


    })
    alert("Success")

  }

}
