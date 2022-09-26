import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit,OnDestroy {
  place:any;
location:any;
pincode:any

  constructor(private _activatedroute : ActivatedRoute) { }

  ngOnInit(): void {
    
   let city =  this._activatedroute.snapshot.queryParamMap.get('place')
   
   console.log('City = ',city)

    this._activatedroute.queryParamMap.subscribe( (param)=>{
      this.place = param.get('place')
      this.location = param.get('location')
      this.pincode = param.get('pincode');
    })
    console.log("Hello from Demo")
  }


  ngOnDestroy(): void {
    console.log("bye bye from demo")
  }



}
