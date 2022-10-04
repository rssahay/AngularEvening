import { Component, OnInit } from '@angular/core';
import { from, map, Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-program',
  templateUrl: './reactive-program.component.html',
  styleUrls: ['./reactive-program.component.scss']
})
export class ReactiveProgramComponent implements OnInit {

  constructor() { }

   observable  = new Observable((subscriber) =>{
    subscriber.next(1);
    subscriber.next(2);
    setTimeout(() => {
        subscriber.next(3)
        subscriber.complete();
    }, 3000);
    //subscriber.complete();
    subscriber.next(6)
   })

   numberobserver = from([1,2,3,4,])
  
  ngOnInit(): void {
    this.observable.subscribe({
      next(x) {
        console.log("recieved value"+ x)
      },
      error(error) {
        console.log("Error recieved"+ error)
      },
      complete() {
        console.log("subscribe completed")
      },
    })

    this.numberobserver.pipe(map((x) => x*2)).subscribe(result => {
      console.log("result"+ result)
    })
  }

}
