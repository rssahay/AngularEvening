import { Component, OnInit } from '@angular/core';
import { filter, first, from, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-example',
  templateUrl: './rxjs-example.component.html',
  styleUrls: ['./rxjs-example.component.scss']
})
export class RxjsExampleComponent implements OnInit {

  constructor() { }

  sendObs = new Observable((sub) =>{
    sub.next(1)
    sub.next("Aditya")
    sub.next(55)
    
    // setTimeout(() => {
    //   sub.next("India")
    //  // sub.complete();
    // }, 5000);
   sub.next("shubham")
   sub.next(this.generateRandomNumber())
    
    sub.error("Something went wrong")
  })

  numObs  = new Observable( obs =>{
    obs.next(2);
    obs.next(3);
    obs.next(4);
  })

 // (4,5,6)
  evennumbers = [2,4,6,8,10]


  sequencNumbers = of(4,5,6)

  generateRandomNumber(){
    return Math.random();
  }

  ngOnInit(): void {

    from(this.evennumbers).subscribe( even =>{
      console.log("Even observables " + even)
      
    })
    //to subscribe to operators
    this.sequencNumbers.subscribe( val => {
      console.log("Numbers observable = "+ val)
    })


    //     this.numObs.pipe(map(val => {return val * 2}))
    //     .subscribe((val) => {console.log(val)}) 
    
    this.numObs.pipe(map((val :any) => val * 5),  // 10 15 20
    filter((val :any) => val % 2 == 0), // 10 20
    map((value :any) => value *2)). // 20 40
    subscribe( value => {
      console.log("after transform "+ value)
    })


    this.sendObs.subscribe({
      next(value) {
        console.log("Recieved notification values "+ value)
      },
      complete(){
        console.log("Recieved notification to complete")
      },error(err) {
        console.log("Recieved Error notification" + err)
      },

    })

    // this.sendObs.subscribe(element => {
    //   console.log("Recieved value = "+ element)
    // })
  }

}
