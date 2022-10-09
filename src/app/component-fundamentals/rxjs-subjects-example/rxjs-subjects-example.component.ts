import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';


@Component({
  selector: 'app-rxjs-subjects-example',
  templateUrl: './rxjs-subjects-example.component.html',
  styleUrls: ['./rxjs-subjects-example.component.scss']
})
export class RxjsSubjectsExampleComponent implements OnInit {

  constructor() { }

  sub = new Subject();

  behaveSubject = new BehaviorSubject(0)

  repSubject = new ReplaySubject(2)

  asynSubject = new AsyncSubject();

  voidsubject = new Subject<void>();
 
  generateRandomNumber(){
    return Math.random();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.voidsubject.next()
    }, 3000);

    
    this.voidsubject.subscribe( value => { console.log("void subject  "+ value)})
    
 
  //   this.asynSubject.subscribe( value => { console.log("async subject 1 = " + value)})

  //   this.asynSubject.next(10)

  //   this.asynSubject.next(20)
  //   this.asynSubject.next(30)

  
  // this.asynSubject.subscribe( value => { console.log("async subject 2 = " + value)})
  // this.asynSubject.next(50)
  // this.asynSubject.complete();


    this.repSubject.subscribe( value => { console.log("Replay subject 1 = " + value)})
    this.repSubject.next(10)
    this.repSubject.next(20)
    this.repSubject.next(30)
   
    this.repSubject.next(40)
    this.repSubject.next(50)
    this.repSubject.subscribe( value => { console.log("Replay subject 2 = " + value)})

    this.repSubject.next(60)
    this.repSubject.next(70)

    this.repSubject.subscribe( value => { console.log("Replay subject 3 = " + value)})
    this.repSubject.complete();
    
    // this.behaveSubject.subscribe( value => {
    //   console.log("Behavior subject 1 =  "+ value)
    // })

    // this.behaveSubject.next(1)
    // this.behaveSubject.next(2);
    // this.behaveSubject.next(3);

    // this.behaveSubject.subscribe( value => {
    //   console.log("behavior subject 2 = "+ value)
    // })
    // this.behaveSubject.next(55);

    // this.behaveSubject.subscribe( value => {
    //   console.log("behavior subject 3 = "+ value)
    // })

    // this.behaveSubject.next(20)
    // this.behaveSubject.next(30)

    // this.sub.subscribe( value => { console.log("Random 1 = " + value)})

    // this.sub.subscribe( value => { console.log("Random 2 = " + value)})

    // this.sub.subscribe( value => { console.log("Random 3 = " + value)})

    // this.sub.next(this.generateRandomNumber())
    // this.sub.next(this.generateRandomNumber())

    // console.log("random check "+ this.generateRandomNumber())

    // this.sub.subscribe( value => {console.log("SUbject Value 1= "+ value)});

    // this.sub.subscribe( val => {console.log(" Subject value 2 = "+ val)})
    // this.sub.next(5);
    // this.sub.next(6)
    
    // this.sub.next(8)
  }

}
