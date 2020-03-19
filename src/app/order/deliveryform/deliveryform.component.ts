import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deliveryform',
  templateUrl: './deliveryform.component.html',
  styleUrls: ['./deliveryform.component.scss']
})
export class DeliveryformComponent implements OnInit {

  constructor() {



   }
   numberOnly(event): boolean {
    
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault()
    }
    return true;

  }
  ngOnInit() {
  }

}
