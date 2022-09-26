import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, HostListener, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycleevents',
  templateUrl: './lifecycleevents.component.html',
  styleUrls: ['./lifecycleevents.component.scss']
})
export class LifecycleeventsComponent implements OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {


  displayChild: boolean = false;
  toggle() {
    this.displayChild = !this.displayChild;
  }
  
  constructor() {
    console.log("LifecycleComponent: Constructor");

   }


  ngOnChanges() {
    console.log("LifecycleComponent: OnChanges");
  }

  ngOnInit() {
    console.log("LifecycleComponent: OnInit");
   this.asd();
    this.xyz();
    
    this.abc1();
  }

  abc1()
  {

  }

  xyz(){

  }

  asd(){

  }

  ngDoCheck() {
    console.log("LifecycleComponent: DoCheck");
  }

  ngAfterContentInit() {
    console.log("LifecycleComponent: AfterContentInit");
  }

  ngAfterContentChecked() {
  console.log("LifecycleComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
  console.log("LifecycleComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("LifecycleComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("LifecycleComponentcheck:OnDestroy");
  }


}
