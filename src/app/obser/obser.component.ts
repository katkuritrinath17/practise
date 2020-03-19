import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Component({
  selector: 'app-obser',
  templateUrl: './obser.component.html',
  styleUrls: ['./obser.component.scss']
})
export class ObserComponent implements OnInit {

  constructor() { }

  ob = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  }).pipe(map(res => res));

  ngOnInit() {

    console.log('just before subscribe');
    // this.ob.subscribe({
    //   next(x) { console.log('got value ' + x); },
    //   error(err) { console.error('something wrong occurred: ' + err); },
    //   complete() { console.log('done'); }
    // });


    this.ob.subscribe((value)=>{
      console.log(value)

    })
    console.log('just after subscribe');
  }



}
