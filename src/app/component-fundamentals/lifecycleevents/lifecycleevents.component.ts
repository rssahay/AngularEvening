import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

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

  constructor() {
    console.log("LifecycleComponent: Constructor");
   }


  ngOnChanges() {
    console.log("LifecycleComponent: OnChanges");
  }

  ngOnInit() {
    console.log("LifecycleComponent: OnInit");
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
