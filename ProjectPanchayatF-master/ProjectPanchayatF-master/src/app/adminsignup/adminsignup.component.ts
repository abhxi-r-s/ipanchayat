import { Component, OnInit } from '@angular/core';
import { PanchayatserviceService } from '../panchayatservice.service';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent implements OnInit {

  data1={

    adminname:"",
    adminaddress:"",
    adminvoterid:"",
    adminposition:"",
    adminpassword:""

  }
  constructor(private aki:PanchayatserviceService) { }

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

Asignup(){

 this.aki.asignup(this.data1).subscribe((data1)=>{

 }) 
alert("Success")
}

}
