import { Component, OnInit } from '@angular/core';
import { PanchayatserviceService } from '../panchayatservice.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  datan={

  news:""

  }

  constructor(private ali:PanchayatserviceService) { }

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

  Usernews(){

  this.ali.usernews(this.datan).subscribe((datan)=>{

  })
  alert("Success")
  }

}
