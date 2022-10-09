import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, from, map, Observable, ReplaySubject, Subject } from 'rxjs';

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

   sub = new Subject();

   behSub  = new BehaviorSubject(0);

   repSubject = new ReplaySubject(3);

   asySubject = new AsyncSubject();
   

   numberobserver = from([1,2,3,4,])

   generateRandomNumber(){
    return Math.random();
  }
  
  ngOnInit(): void {


       this.sub.subscribe(el => {
      console.log("Subject value " + el)
    })

    this.sub.subscribe( el2 => {
      console.log("2nd subject " + el2)
    })

    
    this.sub.next(this.generateRandomNumber());
    this.sub.next(this.generateRandomNumber());
  
    // this.asySubject.subscribe( el => {console.log(" Async result = " + el)})

    // this.asySubject.next(2)

    // this.asySubject.next(6)

    // this.asySubject.subscribe( el => {console.log(" Async result 2  = " + el)})
    // this.asySubject.next(8)
    // this.asySubject.complete();


    // this.repSubject.next(22)
    // this.repSubject.next(44)
    // this.repSubject.next(55)
    // this.repSubject.next(66)
    // this.repSubject.subscribe( el => console.log("replay value 1 = " + el))


    // this.repSubject.next(70)
    // this.repSubject.subscribe(el => console.log("Replay subject 2 = "+ el))
    // this.repSubject.next(77)
    // this.repSubject.next(88)

    // this.behSub.next(22);
    // this.behSub.next(44)
    // this.behSub.subscribe( val => console.log("behav sub 1 = " + val))
  
    // this.behSub.subscribe( val => console.log("behav sub 2 = " + val))

  
 


    // this.observable.subscribe({
    //   next(x) {
    //     console.log("recieved value"+ x)
    //   },
    //   error(error) {
    //     console.log("Error recieved"+ error)
    //   },
    //   complete() {
    //     console.log("subscribe completed")
    //   },
    // })

    // this.numberobserver.pipe(map((x) => x*2)).subscribe(result => {
    //   console.log("result"+ result)
    // })
  }

}
