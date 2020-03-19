import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() nani: any;
  @Output() sendMesssag = new EventEmitter<any>()

  // @ViewChild('myDiv') ele: ElementRef;
  
  // @ViewChild('secondDiv') secondEle: ElementRef
  
  constructor() {

  }

  ngOnInit() {
    this.sendMesssag.emit('hey am dng well')
  }

//   test() {
//     console.log(this.ele)
// this.secondEle.nativeElement.title=this.ele.nativeElement.innerHTML
//   }

}
