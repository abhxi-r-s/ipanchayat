import { Component, OnInit } from '@angular/core';
import { PanchayatserviceService } from '../panchayatservice.service';

@Component({
  selector: 'app-sendrequest',
  templateUrl: './sendrequest.component.html',
  styleUrls: ['./sendrequest.component.css']
})
export class SendrequestComponent implements OnInit {

  data1={

    requestname:"",
    vid:"",
    facilitytype:"",
    userequest:""


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
  
  Request(){

    this.api.request(this.data1).subscribe((data)=>{

    })
  alert("Success")
  }

}
