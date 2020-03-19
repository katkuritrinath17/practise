import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-norder',
  templateUrl: './norder.component.html',
  styleUrls: ['./norder.component.scss']
})
export class NorderComponent implements OnInit,OnChanges {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  ngOnChanges(chan:SimpleChanges){
    console.log(chan)

  }
  details = this.fb.group({

    firstName: ['nani'],
    lastName: ['katkuri'],
    age: ['25'],
    address: this.fb.group({
      street: ['kphb'],
      email: ['nani@gmail.com'],
      phone: ['7416258099']
    })


  })
  // details =new FormGroup({
  //   firstName:new FormControl('nani'),
  //   lastName:new FormControl(''),
  //   age:new FormControl(''),
  //   address:new FormGroup({
  //     street:new FormControl(''),
  //     email:new FormControl(''),
  //     phone:new FormControl('')

  //   })
  // })

  numberOnly(event): boolean {

    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault()
    }
    return true;

  }
  

  partiallyloadData() {
    debugger
    this.details.reset()

  }

}
